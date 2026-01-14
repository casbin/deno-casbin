# Updating deno-casbin

This guide explains how to update deno-casbin's dependencies and versions.

## Overview

deno-casbin is a wrapper around the Node.js casbin library that makes it compatible with Deno. It bundles the casbin npm package into a single file that can be imported in Deno using the Node.js compatibility layer.

## Components to Update

### 1. Casbin Dependency

The main dependency is the `casbin` npm package.

**To update:**

1. Edit `package.json` and update the casbin version:
   ```json
   "dependencies": {
     "casbin": "^5.48.0"
   }
   ```

2. Install the updated dependency:
   ```bash
   npm install
   ```

3. Regenerate the bundle:
   ```bash
   npm run bundle
   ```

### 2. Deno Standard Library

The `mod.ts` file imports `createRequire` from Deno's standard library.

**To update:**

1. Check the latest compatible version at https://deno.land/std
2. Update the import URL in `mod.ts`:
   ```typescript
   import { createRequire } from "https://deno.land/std@0.177.0/node/module.ts";
   ```

**Note:** The Deno std library structure has changed over versions. Ensure the `node/module.ts` path still exists and exports `createRequire` in the version you're updating to.

### 3. Build Tool (@vercel/ncc)

The bundler used to create `node-casbin/index.js` is @vercel/ncc (formerly @zeit/ncc).

**To update:**

1. Edit `package.json` and update the version:
   ```json
   "devDependencies": {
     "@vercel/ncc": "^0.38.2"
   }
   ```

2. Install and regenerate:
   ```bash
   npm install
   npm run bundle
   ```

## Verification Steps

After updating:

1. Check that the bundle was created successfully:
   ```bash
   ls -lh node-casbin/index.js
   ```

2. If you have Deno installed, test the import:
   ```bash
   deno run --allow-read mod.ts
   ```

3. Commit all changed files:
   - `package.json`
   - `package-lock.json`
   - `mod.ts` (if Deno std version changed)
   - `node-casbin/index.js`

## Troubleshooting

### Bundle command fails

If `npm run bundle` fails with OpenSSL errors, you may need to update @vercel/ncc to a newer version that's compatible with your Node.js version.

### createRequire not found

If the Deno std library import fails, the structure may have changed. Check the Deno documentation for the current way to use Node.js modules in Deno.

## Release Process

After updating and testing:

1. Update the README.md if necessary
2. Create a git tag with the new version
3. Push the changes and tag to GitHub
4. The module will be available at the updated version via deno.land/x or direct GitHub imports
