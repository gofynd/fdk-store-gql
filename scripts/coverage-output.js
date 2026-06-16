const fs = require('fs');
const path = require('path');

// Jest writes its test-results JSON here (via: jest --json --outputFile=./coverage/coverage.json)
const coverage = fs.readFileSync(
  path.resolve(__dirname, '../coverage/coverage.json'),
  'utf8',
);

if (
  coverage
  && JSON.parse(coverage).numFailedTests === 0
  && JSON.parse(coverage).numFailedTestSuites === 0
  && JSON.parse(coverage).numPendingTestSuites === 0
  && JSON.parse(coverage).numPendingTests === 0
  && JSON.parse(coverage).numPassedTests === JSON.parse(coverage).numTotalTests
) {
  // Istanbul json-summary reporter writes the per-file + total summary here.
  let data = fs.readFileSync(
    path.resolve(__dirname, '../coverage/coverage-summary.json'),
    'utf8',
  );
  data = JSON.parse(data).total;
  let output = {
    coverage_pct: data.lines.pct,
    lines_total: data.lines.total,
    lines_covered: data.lines.covered,
    branch_pct: data.branches.pct,
    branches_covered: data.branches.covered,
    branches_total: data.branches.total,
  };
  output = JSON.stringify(output, null, 2);
  fs.writeFileSync(
    path.join(__dirname, '../coverage/', 'coverage_output.json'),
    output,
    'utf8',
  );
  console.log('dumped coverage_output.json');
} else {
  console.error('coverage_output.json not generated');
}
