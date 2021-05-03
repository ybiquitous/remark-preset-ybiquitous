// eslint-disable-next-line import/prefer-default-export
export const plugins = [
  // Preset
  "remark-preset-lint-recommended",

  // NOTE: Avoid conflicts with Prettier.
  ["remark-lint-list-item-bullet-indent", false],
  ["remark-lint-list-item-indent", false],

  // Lint rule
  "remark-lint-code-block-syntax",
  "remark-lint-file-extension",
  "remark-lint-final-definition",
  "remark-lint-final-newline",
  "remark-lint-first-heading-level",
  "remark-lint-heading-increment",
  "remark-lint-linebreak-style",
  "remark-lint-no-consecutive-blank-lines",
  "remark-lint-no-duplicate-defined-urls",
  "remark-lint-no-duplicate-headings",
  "remark-lint-no-duplicate-headings",
  "remark-lint-no-emphasis-as-heading",
  "remark-lint-no-empty-url",
  "remark-lint-no-file-name-articles",
  "remark-lint-no-file-name-consecutive-dashes",
  "remark-lint-no-file-name-irregular-characters",
  "remark-lint-no-file-name-mixed-case",
  "remark-lint-no-file-name-outer-dashes",
  "remark-lint-no-heading-like-paragraph",
  "remark-lint-no-heading-punctuation",
  ["remark-lint-no-missing-blank-lines", { exceptTightLists: true }],
  "remark-lint-no-multiple-toplevel-headings",
  "remark-lint-no-paragraph-content-indent",
  "remark-lint-no-reference-like-url",
  "remark-lint-no-shell-dollars",
  "remark-lint-no-table-indentation",
  "remark-lint-no-tabs",
  "remark-lint-no-unneeded-full-reference-image",
  "remark-lint-no-unneeded-full-reference-link",
  "remark-lint-table-pipes",

  // Plugin
  "remark-frontmatter",
  "remark-gfm",
  "remark-validate-links",
];
