'use strict';

/*
 * Indentation needs to be visible (so longer than 1), but also cannot be too
 * long, so as not to cause lines to be too long.
 *
 * Tabs are bad because they are variable length (sometimes 4, sometimes 8, and
 * so on), and thus do not allow the line length to be consistent.
 */
const indentWidth = 2;

/*
 * Long lines are harder to read, and it is more likely for people to miss bugs
 * at the end of them.
 *
 * Having shorter lines also makes it easier to read code side by side, and
 * gives more precise diffs.
 */
const maxColumns = 80;

module.exports = {
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 2019,
    'sourceType': 'module',
  },
  'env': {
    'browser': true,
    'es6': true,
    'jest': true,
    'node': true,
  },
  'plugins': [
    'react',
    'import',
    'jsx-a11y',
  ],
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/strict',
  ],
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
  'rules': {

    'indent': [ 'error', indentWidth ],

    /*
     * This rule is deprecated, and requires all labels to be explicit, which
     * should not be necessary anymore.
     */
    'jsx-a11y/label-has-for': 'off',

    'max-len': [
      'error',
      {
        'code': maxColumns,
        'tabWidth': indentWidth,
        'ignoreUrls': true,
      },
    ],

    /*
     * Parameters like `event` and `request` make it easier to identify the
     * purpose of functions, even when they are not used.
     */
    'no-unused-vars': [ 'error', { 'args': 'none' } ],

    'react/jsx-indent': [ 'error', indentWidth ],

    'react/jsx-indent-props': [ 'error', indentWidth ],

    /*
     * Semicolons are an intended part of the language, whereas automatic
     * semicolon insertion (ASI) is not, being merely a quirks mode.
     */
    'semi': [ 'error', 'always' ],

    /*
     * Use of a byte order mark (BOM) is not necessary or recommended for UTF-8.
     */
    'unicode-bom': [ 'error', 'never' ],
  },
};
