/**
 * Based on code from:
 * <https://github.com/mui-org/material-ui/blob/8c28ed9c67e7b6ad02a8826178352aa4e9901b50/examples/nextjs/pages/_app.js>
 *
 * Copyright (c) 2014 Call-Em-All
 *
 * [MIT license](https://github.com/mui-org/material-ui/blob/master/LICENSE)
 */

import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline
              to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
