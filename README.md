[![npm](https://img.shields.io/npm/v/remark-preset-ybiquitous?style=flat-square)](https://www.npmjs.com/package/remark-preset-ybiquitous)

# remark-preset-ybiquitous

This package is a personal [remark](https://remark.js.org) preset for [ybiquitous](https://github.com/ybiquitous).

It includes some lint rules, plugins, and so on. See [`index.js`](./index.js) for details.

Note: This package supports only **ESM**. remark 14+ required.

## Usage

First, install the package:

```shell
npm install remark-preset-ybiquitous
```

Next, add it to your remark configuration (e.g. `.remarkrc`):

```json
{
  "plugins": ["remark-preset-ybiquitous"]
}
```

Finally, run remark:

```console
$ remark .
README.md
  31:1-31:9  warning  Do not use headings with similar content (5:1)  no-duplicate-headings  remark-lint

⚠ 1 warning
```
