module.exports.plugins = [
  // Preset
  require("remark-preset-lint-recommended"),

  // NOTE: Avoid conflicts with Prettier.
  /* eslint-disable node/no-extraneous-require, import/no-extraneous-dependencies -- These packages are included in `remark-preset-lint-recommended` */
  [require("remark-lint-list-item-bullet-indent"), false],
  [require("remark-lint-list-item-indent"), false],
  /* eslint-enable node/no-extraneous-require, import/no-extraneous-dependencies */

  // Lint rule
  require("remark-lint-code-block-syntax"),
  require("remark-lint-file-extension"),
  require("remark-lint-final-definition"),
  require("remark-lint-final-newline"),
  require("remark-lint-first-heading-level"),
  require("remark-lint-heading-increment"),
  require("remark-lint-linebreak-style"),
  require("remark-lint-no-consecutive-blank-lines"),
  require("remark-lint-no-duplicate-defined-urls"),
  require("remark-lint-no-duplicate-headings"),
  require("remark-lint-no-duplicate-headings"),
  require("remark-lint-no-emphasis-as-heading"),
  require("remark-lint-no-empty-url"),
  require("remark-lint-no-file-name-articles"),
  require("remark-lint-no-file-name-consecutive-dashes"),
  require("remark-lint-no-file-name-irregular-characters"),
  require("remark-lint-no-file-name-mixed-case"),
  require("remark-lint-no-file-name-outer-dashes"),
  require("remark-lint-no-heading-like-paragraph"),
  require("remark-lint-no-heading-punctuation"),
  [require("remark-lint-no-missing-blank-lines"), { exceptTightLists: true }],
  require("remark-lint-no-multiple-toplevel-headings"),
  require("remark-lint-no-paragraph-content-indent"),
  require("remark-lint-no-reference-like-url"),
  require("remark-lint-no-shell-dollars"),
  require("remark-lint-no-table-indentation"),
  require("remark-lint-no-tabs"),
  require("remark-lint-no-unneeded-full-reference-image"),
  require("remark-lint-no-unneeded-full-reference-link"),
  require("remark-lint-table-pipes"),

  // Plugin
  require("remark-frontmatter"),
  require("remark-gfm"),
  require("remark-validate-links"), // eslint-disable-line import/max-dependencies
];
