/**
 * Extracts a single release section from CHANGELOG.md so the CI pipeline can
 * use it as the GitHub Release body.
 *
 * Every tag publishes the section whose heading matches the tag minus the
 * leading "v":
 *   - stable tag v3.1.0        -> the "[3.1.0]" section
 *   - beta tag   v3.1.0-beta.1 -> the "[3.1.0-beta.1]" section
 *
 * So every beta needs its own "## [X.Y.Z-beta.N]" section with its own notes.
 * A missing or empty section throws, which fails the release step by design.
 *
 * This file is intentionally self-contained CommonJS (no imports from lib/) so
 * it runs directly with `node` in the pipeline. Unit tests live at
 * src/__tests__/release/extractChangelog.test.ts.
 */

function escapeForRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * @param {string} changelogText Full contents of CHANGELOG.md
 * @param {string} tag           The release tag, e.g. "v3.1.0" or "v3.1.0-beta.1"
 * @returns {string} The trimmed markdown body of the matched section
 */
function extractSection(changelogText, tag) {
  const heading = tag.replace(/^v/, "");

  const lines = changelogText.split("\n");
  const headerPattern = new RegExp(
    "^##\\s+\\[" + escapeForRegExp(heading) + "\\]"
  );
  const nextHeaderPattern = /^##\s+\[/;

  const startIndex = lines.findIndex((line) => headerPattern.test(line));
  if (startIndex === -1) {
    throw new Error(
      `No changelog section found for "${heading}" (tag "${tag}"). ` +
        `Add a "## [${heading}]" section to CHANGELOG.md before releasing.`
    );
  }

  const bodyLines = [];
  for (let i = startIndex + 1; i < lines.length; i++) {
    if (nextHeaderPattern.test(lines[i])) break;
    bodyLines.push(lines[i]);
  }

  const body = bodyLines.join("\n").replace(/^\s*\n/, "").replace(/\s+$/, "");
  if (body.trim() === "") {
    throw new Error(
      `Changelog section "${heading}" (tag "${tag}") is empty. ` +
        `Add release notes under "## [${heading}]" in CHANGELOG.md before releasing.`
    );
  }

  return body;
}

module.exports = { extractSection };

// CLI: `node scripts/extract-changelog.js <changelogPath> <tag>`
// Prints the extracted section to stdout, or exits non-zero on any error.
if (require.main === module) {
  const fs = require("fs");
  const [, , changelogPath, tag] = process.argv;

  if (!changelogPath || !tag) {
    console.error(
      "Usage: node scripts/extract-changelog.js <changelogPath> <tag>"
    );
    process.exit(1);
  }

  try {
    const text = fs.readFileSync(changelogPath, "utf8");
    const body = extractSection(text, tag);
    process.stdout.write(body);
  } catch (err) {
    // In Azure DevOps (TF_BUILD is set), prefix with the logging command so the
    // message renders as a red error and shows up in the run's error summary.
    const prefix = process.env.TF_BUILD ? "##vso[task.logissue type=error]" : "";
    console.error(`${prefix}extract-changelog: ${err.message}`);
    process.exit(1);
  }
}
