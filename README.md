# Vue Import -- Externals Being Bundled

### Purpose

The reason for this repo is to provide a replicatable issue of me
trying to use vue/cli's method of getting webpack to externalize
imports.

In this example, I'm importing three.js into my project, setting it
up as an external in accordance with vue/cli's instructions to the
best of my ability, and it is still making the bundle hundres of kbs
larger than it should be, given the only import is marked external.

In my runs locally, the build without the import is roughly 30kb, and
is roughly _550kb_ with the (attempted) external three.js lib.

The comments in `vue.config.js` are the other attempts made to get
the bundler to exclude our marked externals.

## Replication

Clone the repo, `npm i`, and `npm run build`.

As is, the vue.config.js file is left with the externalization bit in,
with the import being called in `HelloWorld.vue` (Everything here is default
besides the imports and vue config to keep this as debuggable as possible).

Removing the import statement from `HelloWorld.vue` will reduce the bundle
size roughly 18 fold.

Is this an issue with vue/cli, or is there something on our end we are missing
or doing wrong?
-Jake
