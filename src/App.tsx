import { Global, ThemeProvider } from '@emotion/react';
import { Router } from './shared/Router';
import { reset } from './styles/GlobalStyle';
import { Theme } from './styles/theme';

const App = () => {
  return (
    <>
      <Global styles={reset} />
      <ThemeProvider theme={Theme}>
        <Router />
      </ThemeProvider>
    </>
  );
};

export default App;
