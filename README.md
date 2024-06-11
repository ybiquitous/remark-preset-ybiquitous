[![npm](https://img.shields.io/npm/v/remark-preset-ybiquitous?style=flat-square)](https://www.npmjs.com/package/remark-preset-ybiquitous)
[![node](https://img.shields.io/node/v/remark-preset-ybiquitous.svg?style=flat-square)](https://github.com/ybiquitousy/remark-preset-ybiquitous)

# remark-preset-ybiquitous

This package is a personal [remark](https://remark.js.org) preset for [ybiquitous](https://github.com/ybiquitous).

It includes some lint rules, plugins, and so on. See [`index.js`](./index.js) for details.

> [!NOTE]
> This package supports only **ESM**. [remark v14](https://github.com/remarkjs/remark/releases/tag/14.0.0) or later is required.

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
