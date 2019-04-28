'use strict';

/*
 * Generally, Markdown should be written so that it is as human readable as
 * possible in its plain text form.
 *
 * This way, it is useful in *both* its converted form, *and* unconverted form.
 *
 * This *does* mean that writability must be sacrificed sometimes.
 */
module.exports = {
  'plugins': [
    'remark-preset-lint-recommended',
    'remark-preset-lint-markdown-style-guide',
    [ 'remark-lint-definition-case', false ],
    [ 'remark-lint-heading-style', 'setext' ],
    [ 'remark-lint-list-item-bullet-indent', false ],
    [ 'remark-lint-list-item-spacing', { checkBlanks: true } ],
    [ 'remark-lint-no-consecutive-blank-lines', false ],
    [ 'remark-lint-no-shortcut-reference-link', false ],
    [ 'remark-lint-ordered-list-marker-value', 'ordered' ],
  ],
};
