# Design System Storybook

Prebuilt component and foundation gallery. Patterns and pattern source files are not included. This package is separate from `@chinnaiya-r-2310/design-system`, which provides the reusable library.

## Install and browse

Requires Node.js 20+. Once published, this gallery is public on npmjs.com: consumers do not need an npm or GitHub account, token, or login.

The gallery uses the npm scope `@chinnaiya-2310`. The component library uses the separate GitHub scope `@chinnaiya-r-2310`, so its existing GitHub Packages configuration can remain unchanged.

```sh
npm install --save-dev @chinnaiya-2310/design-system-storybook@1.0.0
npx design-system-storybook
```

Open http://127.0.0.1:6006. If that port is in use:

```sh
npx design-system-storybook --port 6007
```

This serves a static gallery bound to your own machine. No React installation, source build, or browser automation is required. Installing this package does not install the reusable component library.

## Publishing (maintainers only)

The package is not available until its first successful npm publication. Confirm that your npm account owns or can publish under the `@chinnaiya-2310` scope; a matching GitHub username does not grant npm ownership.

1. Create an npm granular access token with write permission for this package/scope and permission to bypass publishing 2FA where required. Use a short expiration and do not share it.
2. Store it as the repository Actions secret `NPM_TOKEN` in GitHub Settings → Secrets and variables → Actions.
3. Commit and push this setup, then manually run **Publish pattern-free Storybook** from GitHub Actions on that branch.
4. Verify the release on npmjs.com before sharing the install command. Increase `version` for each later release; published versions cannot be overwritten.

The workflow tests the server, builds only components/foundations, verifies zero patterns, inspects the archive, and publishes with public access. Only maintainers need publishing credentials; consumers need none. The component-library publishing workflow is unchanged.
