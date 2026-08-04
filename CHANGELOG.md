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

## [3.0.79] - 2026-08-04
### Added
- Support for order tags.
- UI functions can now return `handled: true` from any GraphQL operation to signal they have fully taken over it. Shadowfire skips the network call and returns the handled marker along with any response the UI function supplies, leaving the store untouched, so the storefront steps aside cleanly instead of treating it as a failure.

## [3.0.79-beta.1] - 2026-07-30
### Added
- Payment extensions can now return a `handled: true` flag from a checkout or payment mutation to signal they have fully taken over the payment, so the storefront steps aside cleanly instead of treating it as a failure.

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
