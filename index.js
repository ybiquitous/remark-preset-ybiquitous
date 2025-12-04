import frontmatter from "remark-frontmatter";
import gfm from "remark-gfm";
import lintCodeBlockSyntax from "remark-lint-code-block-syntax";
import lintFileExtension from "remark-lint-file-extension";
import lintFinalDefinition from "remark-lint-final-definition";
import lintFinalNewline from "remark-lint-final-newline";
import lintFirstHeadingLevel from "remark-lint-first-heading-level";
import lintHeadingIncrement from "remark-lint-heading-increment";
import lintLinebreakStyle from "remark-lint-linebreak-style";
import lintListItemBulletIndent from "remark-lint-list-item-bullet-indent"; // eslint-disable-line n/no-extraneous-import
import lintListItemIndent from "remark-lint-list-item-indent"; // eslint-disable-line n/no-extraneous-import
import lintNoConsecutiveBlankLines from "remark-lint-no-consecutive-blank-lines";
import lintNoDuplicateDefinedUrls from "remark-lint-no-duplicate-defined-urls";
import lintNoDuplicateHeadings from "remark-lint-no-duplicate-headings";
import lintNoEmphasisAsHeading from "remark-lint-no-emphasis-as-heading";
import lintNoEmptyUrl from "remark-lint-no-empty-url";
import lintNoFileNameArticles from "remark-lint-no-file-name-articles";
import lintNoFileNameConsecutiveDashes from "remark-lint-no-file-name-consecutive-dashes";
import lintNoFileNameIrregularCharacters from "remark-lint-no-file-name-irregular-characters";
import lintNoFileNameMixedCase from "remark-lint-no-file-name-mixed-case";
import lintNoFileNameOuterDashes from "remark-lint-no-file-name-outer-dashes";
import lintNoHeadingLikeParagraph from "remark-lint-no-heading-like-paragraph";
import lintNoHeadingPunctuation from "remark-lint-no-heading-punctuation";
import lintNoMissingBlankLines from "remark-lint-no-missing-blank-lines";
import lintNoMultipleToplevelHeadings from "remark-lint-no-multiple-toplevel-headings";
import lintNoParagraphContentIndent from "remark-lint-no-paragraph-content-indent";
import lintNoReferenceLikeUrl from "remark-lint-no-reference-like-url";
import lintNoShellDollars from "remark-lint-no-shell-dollars";
import lintNoTableIndentation from "remark-lint-no-table-indentation";
import lintNoTabs from "remark-lint-no-tabs";
import lintNoUndefinedReferences from "remark-lint-no-undefined-references"; // eslint-disable-line n/no-extraneous-import
import lintNoUnneededFullReferenceImage from "remark-lint-no-unneeded-full-reference-image";
import lintNoUnneededFullReferenceLink from "remark-lint-no-unneeded-full-reference-link";
import lintStrikethroughMarker from "remark-lint-strikethrough-marker";
import lintTablePipes from "remark-lint-table-pipes";
import presetLintRecommended from "remark-preset-lint-recommended";
import validateLinks from "remark-validate-links";

export default {
  plugins: [
    // Parser
    frontmatter,
    gfm,

    // Preset
    presetLintRecommended,

    // NOTE: Avoid conflicts with Prettier.
    [lintListItemBulletIndent, false],
    [lintListItemIndent, false],

    // Lint rule
    lintCodeBlockSyntax,
    lintFileExtension,
    lintFinalDefinition,
    lintFinalNewline,
    lintFirstHeadingLevel,
    lintHeadingIncrement,
    lintLinebreakStyle,
    lintNoConsecutiveBlankLines,
    lintNoDuplicateDefinedUrls,
    lintNoDuplicateHeadings,
    lintNoEmphasisAsHeading,
    lintNoEmptyUrl,
    lintNoFileNameArticles,
    lintNoFileNameConsecutiveDashes,
    lintNoFileNameIrregularCharacters,
    lintNoFileNameMixedCase,
    lintNoFileNameOuterDashes,
    lintNoHeadingLikeParagraph,
    lintNoHeadingPunctuation,
    [lintNoMissingBlankLines, { exceptTightLists: true }],
    lintNoMultipleToplevelHeadings,
    lintNoParagraphContentIndent,
    lintNoReferenceLikeUrl,
    lintNoShellDollars,
    lintNoTableIndentation,
    lintNoTabs,

    // Allow Alerts. See https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts
    [lintNoUndefinedReferences, { allow: [/^!(?:NOTE|TIP|IMPORTANT|WARNING|CAUTION)$/u] }],

    lintNoUnneededFullReferenceImage,
    lintNoUnneededFullReferenceLink,
    [lintStrikethroughMarker, "~~"],
    lintTablePipes,

    // Validator
    validateLinks,
  ],
};
