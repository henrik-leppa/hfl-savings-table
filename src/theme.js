/**
 * Based on code from:
 * <https://github.com/mui-org/material-ui/blob/8c28ed9c67e7b6ad02a8826178352aa4e9901b50/examples/nextjs/src/theme.js>
 *
 * Copyright (c) 2014 Call-Em-All
 *
 * [MIT license](https://github.com/mui-org/material-ui/blob/master/LICENSE)
 */

import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
