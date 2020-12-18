import React from 'react';
import { ThemeProvider } from 'theme-ui';
import type { AppProps } from 'next/app';
import theme from '../utilities/theming/theme';

export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
