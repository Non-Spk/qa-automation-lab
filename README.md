# QA Automation Lab

<p align="center">
  <a href="https://github.com/Non-Spk/qa-automation-lab/actions/workflows/playwright.yml">
    <img alt="CI status" src="https://github.com/Non-Spk/qa-automation-lab/actions/workflows/playwright.yml/badge.svg" />
  </a>
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" />
  <img alt="Playwright" src="https://img.shields.io/badge/Playwright-45ba4b?logo=playwright&logoColor=white" />
  <img alt="pnpm" src="https://img.shields.io/badge/pnpm-12.15.0-F69220?logo=pnpm&logoColor=white" />
  <a href="LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/Non-Spk/qa-automation-lab" />
  </a>
</p>

A hands-on QA automation lab focused on Playwright and TypeScript for browser and API test automation, with reusable page objects, fixtures, schema validation, and CI-driven verification.

## Overview

This repository is a learning-focused test automation project built around the public demo site `https://www.automationexercise.com`.

It demonstrates a practical structure for:

- UI test automation for authentication flows
- API test coverage for product-list retrieval
- schema validation with Ajv
- reusable Playwright fixtures and page object abstractions
- automated quality checks in a Dockerized GitHub Actions workflow

The project is intentionally structured as a reusable testing reference rather than a production application. It emphasizes readable automation patterns, maintainable selectors, and explicit validation of both user flows and API responses.

## Key Features

- Web automation for authentication scenarios, including account registration, login, invalid login, and deletion
- API validation for the product catalog using a typed service-client layer
- Playwright fixtures to compose page objects and feature-level workflows cleanly
- Centralized configuration for web and API endpoints
- Locale-aware translation support and a validation script for `en` and `th` message sets
- Dockerized local execution and GitHub Actions coverage for linting, type checking, formatting, and Playwright test runs

## Technology Stack

| Category            | Technologies             |
| ------------------- | ------------------------ |
| Language            | TypeScript               |
| Test Framework      | Playwright               |
| API Validation      | Ajv                      |
| Package Manager     | pnpm                     |
| Linting             | ESLint                   |
| Formatting          | Prettier                 |
| Runtime / Execution | Node.js via pnpm, Docker |
| CI                  | GitHub Actions           |

## Project Architecture

```text
.
├── .github/
│   └── workflows/
│       └── playwright.yml
├── .husky/
│   └── pre-commit
├── src/
│   ├── fixtures/
│   │   ├── api/
│   │   │   └── api.fixture.ts
│   │   └── web/
│   │       ├── base.fixture.ts
│   │       └── i18n.fixture.ts
│   ├── keywords/
│   │   ├── api/
│   │   │   ├── clients/
│   │   │   │   └── product.client.ts
│   │   │   └── services/
│   │   │       └── product.service.ts
│   │   └── web/
│   │       ├── features/
│   │       │   └── auth.features.ts
│   │       └── pages/
│   │           ├── accountCreated.page.ts
│   │           ├── base.page.ts
│   │           ├── deleteAccount.page.ts
│   │           ├── home.page.ts
│   │           ├── login.page.ts
│   │           └── signUp.page.ts
│   ├── resources/
│   │   ├── configs/
│   │   │   ├── api.config.ts
│   │   │   ├── i18n.config.ts
│   │   │   └── web.config.ts
│   │   ├── data/
│   │   │   └── web/
│   │   │       └── account.data.ts
│   │   ├── interfaces/
│   │   │   ├── api/
│   │   │   │   └── product.interface.ts
│   │   │   └── web/
│   │   │       └── account.interface.ts
│   │   ├── locators/
│   │   │   └── web/
│   │   │       ├── accountCreated.locator.ts
│   │   │       ├── deleteAccount.locator.ts
│   │   │       ├── home.locator.ts
│   │   │       ├── login.locator.ts
│   │   │       └── signUp.locator.ts
│   │   ├── schemas/
│   │   │   └── api/
│   │   │       └── product.schema.ts
│   │   └── translations/
│   │       ├── script/
│   │       │   └── check-i18n.ts
│   │       ├── en.ts
│   │       ├── th.ts
│   │       ├── type.ts
│   │       └── ...
│   └── tests/
│       ├── api/
│       │   └── product.spec.ts
│       └── web/
│           └── auth.spec.ts
├── .dockerignore
├── .gitignore
├── Dockerfile
├── LICENSE
├── README.md
├── eslint.config.mjs
├── package.json
├── playwright.config.ts
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tsconfig.json
└──
```

### Architectural Patterns

The source tree follows a layered test architecture common in Playwright projects:

- `src/tests` contains end-to-end specs
- `src/fixtures` provides reusable test fixtures and context setup
- `src/keywords` holds business-facing interactions and feature orchestration
- `src/resources` centralizes endpoints, selectors, interfaces, translations, and validation schemas

This keeps the test scenarios readable while separating page behavior from test data and business logic.

## Testing Strategy

The repository includes both UI and API automation, with the following coverage currently implemented:

### Web UI tests

The Playwright suite in `src/tests/web/auth.spec.ts` covers authentication scenarios against the Automation Exercise site:

- register a new user
- log in with valid credentials
- log in with invalid credentials
- delete the created account as part of the flow

These tests are tagged with `@smoke` and `@auth`, and the suite exercises a page-object-driven approach built on `HomePages`, `LoginPages`, `SignUpPages`, and feature composition in `AuthFeature`.

### API tests

The API suite in `src/tests/api/product.spec.ts` performs a GET request to the product list endpoint and validates the response schema using Ajv. This project checks both:

- HTTP status (`200`)
- response shape and required fields via `productResponseSchema`

### Data and localization support

- `src/resources/data/web/account.data.ts` stores example account credentials and profile data
- `src/resources/configs/i18n.config.ts` resolves locale values and exposes English/Thai translations
- `src/resources/translations/script/check-i18n.ts` validates translation files against a shared TypeScript type

### Notable limitations

The repository is currently focused on Playwright automation for a public demo site. Mobile browser projects and additional browser coverage are present as commented configuration examples rather than active test targets.

## Getting Started

### Prerequisites

- Git
- pnpm 12.15.0 (declared in `package.json`)
- Docker (optional, for containerized execution)

The repo uses `corepack` in the Docker image and declares the package manager version in `package.json`.

### Install dependencies

```bash
git clone https://github.com/Non-Spk/qa-automation-lab.git
cd qa-automation-lab
corepack enable
pnpm install
```

### Optional locale configuration

The project supports a locale override via the `TEST_LOCALE` environment variable for localization-related checks. Supported values are currently `en` and `th`.

```bash
export TEST_LOCALE=en
```

## Running Tests

The project exposes several verified scripts in `package.json`:

```bash
# Run the full Playwright suite
pnpm test

# Run smoke tests only
pnpm test:smoke

# Lint the project
pnpm lint

# Type-check the project
pnpm typecheck

# Check formatting
pnpm format:check

# Auto-format files
pnpm format:write

# Validate translation files
pnpm i18n:check
```

### Headed / local debugging

Playwright is configured to use `baseURL` from `src/resources/configs/web.config.ts` and runs the Chromium project by default. To run tests with the browser visible locally, use the normal Playwright mode in your terminal environment rather than CI-only settings.

## CI/CD and Docker

### GitHub Actions

The repository includes a GitHub Actions workflow at `.github/workflows/playwright.yml`.

It runs on:

- push to `main` or `master`
- pull requests targeting `main` or `master`
- manual `workflow_dispatch`

The workflow performs the following sequence:

1. checks out the repo
2. builds the Docker image
3. runs linting, type-checking, formatting validation, and Playwright tests inside the container
4. uploads `playwright-report/` and `test-results/` as artifacts

### Docker

The Dockerfile builds a Playwright-based test environment and executes the default test command:

```bash
docker build -t qa-automation-lab .
docker run --rm qa-automation-lab
```

This matches the repository's `docker:test` script:

```bash
pnpm docker:test
```

## Test Reports and Results

Playwright is configured with the HTML reporter in `playwright.config.ts`:

- reports are generated under `playwright-report/`
- run artifacts are written under `test-results/`

In CI, the workflow uploads both directories as GitHub Actions artifacts. The repository does not include committed historical execution reports, screenshots, or a generated result summary; those are expected to be produced at runtime.

## Engineering Practices

This project demonstrates several maintainable testing practices:

- layered test architecture with fixtures, page objects, and feature orchestrators
- explicit waits and assertions centered on page-level behavior
- reusable test data separated from scenario logic
- schema validation for API responses using Ajv
- centralized configuration for URLs and runtime settings
- translation validation through TypeScript type checking before commit
- pre-commit quality checks via `.husky/pre-commit`

## Roadmap

The following items are reasonable future improvements based on the current repository structure and commented configuration, and should be treated as planned rather than implemented features:

- expand test coverage beyond the current authentication and product-list scenarios
- enable additional browser targets such as Firefox, WebKit, and mobile viewport profiles
- add more API contract tests and response edge-case validation
- improve reporting with richer test metadata and artifact retention policies
- extend localization testing beyond the current translation validation script

## Contributing

Contributions are welcome if they improve the quality, readability, or coverage of the test automation project.

Suggested workflow:

```bash
git checkout -b feature/my-improvement
pnpm install
pnpm lint
pnpm typecheck
pnpm test
```

Before submitting changes:

- keep the project architecture consistent with `src/tests`, `src/fixtures`, `src/keywords`, and `src/resources`
- prefer reusable fixtures and data over duplicate logic
- validate formatting and translation checks before commit
- avoid committing real credentials or environment secrets

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

Built as a practical QA automation learning project using Playwright, TypeScript, and modern test architecture patterns.
