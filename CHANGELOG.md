# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Every release tag publishes the section whose heading matches the tag without the
leading `v`: a stable tag `v3.1.0` publishes `[3.1.0]`, and a beta tag
`v3.1.0-beta.1` publishes `[3.1.0-beta.1]`. Each beta therefore needs its own
`## [X.Y.Z-beta.N]` section with its own notes. `[Unreleased]` is a scratch area
for notes not yet assigned to a tagged section; it is never published directly.
See the "Releasing" section in the README for the workflow.

## [Unreleased]

## [3.0.78] - 2026-07-09
### Added
- Support for split payments allowing a single order to be paid across multiple payment methods.
- Storefront events to support analytics for split checkout

## [3.0.77-beta.3] - 2026-07-03
### Added
- End-to-end verification of changelog-driven GitHub Release notes.

## [3.0.77] - 2026-07-03
### Added
- Baseline changelog. Release history prior to this version is available via the
  git tags and GitHub Releases of this repository.
