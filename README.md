# Vue Import -- Externals Being Bundled

## Purpose

The reason for this repo is to provide a replicatable issue of me
trying to use vue/cli's method of getting webpack to externalize
imports.

In this example, I'm importing three.js into my project, setting it
up as an external in accordance with vue/cli's instructions to the
best of my ability, and it is still making the bundle hundres of kbs
larger than it should be, given the only import is marked external.

In my runs locally, the build without the import is roughly 20kb, and
is roughly _550kb_ with the (attempted) external three.js lib.

The comments in `vue.config.js` are the other attempts made to get
the bundler to exclude our marked externals.

## Replication

Clone the repo and build the project

```bash
npm i
npm run build
```

When the build is run, wepack responds with this:

```bash
 warning

webpack performance recommendations:
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

  File                                 Size               Gzipped

  dist\js\chunk-vendors.a8c563f2.js    543.55 kb          136.56 kb
  dist\js\app.83f8782e.js              4.71 kb            1.69 kb
  dist\css\app.b67f310b.css            0.33 kb            0.23 kb

  Images and other types of assets omitted.

 DONE  Build complete. The dist directory is ready to be deployed.
 INFO  Check out deployment instructions at https://cli.vuejs.org/guide/deployment.html
```

To see the bundle size of the original project, remove/comment line 34 of `HelloWorld.vue`:

```js
import THREE from "three";
```

And the build responds with the following:

```bash
DONE  Compiled successfully in 12222ms                                                                                                                                                                                              16:33:14
  File                                 Size               Gzipped

  dist\js\chunk-vendors.1fe8a151.js    17.66 kb           6.66 kb
  dist\js\app.106de3eb.js              4.69 kb            1.68 kb
  dist\css\app.ce1c2449.css            0.33 kb            0.23 kb

  Images and other types of assets omitted.

 DONE  Build complete. The dist directory is ready to be deployed.
 INFO  Check out deployment instructions at https://cli.vuejs.org/guide/deployment.html
```

As is, the vue.config.js file is left with the externalization bit in,
with the import being called in `HelloWorld.vue` (Everything here is default
besides the imports and vue config to keep this as debuggable as possible).

Removing the import statement from `HelloWorld.vue` will reduce the bundle
size roughly 27 fold.

Is this an issue with vue/cli, or is there something on our end we are missing
or doing wrong?
-Jake
