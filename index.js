module.exports.plugins = [
  require("remark-preset-lint-recommended"),
  require("remark-lint-code-block-syntax"),
  require("remark-lint-no-heading-punctuation"),
  require("remark-validate-links"),

  // Avoid conflicts with Prettier
  /* eslint-disable node/no-extraneous-require, import/no-extraneous-dependencies -- These packages are included in `remark-preset-lint-recommended` */
  [require("remark-lint-list-item-bullet-indent"), false],
  [require("remark-lint-list-item-indent"), false],
  /* eslint-enable */
];
