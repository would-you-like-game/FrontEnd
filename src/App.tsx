import { Global, ThemeProvider } from '@emotion/react';
import { Router } from './shared/Router';
import { reset } from './styles/GlobalStyle';
import { Theme } from './styles/theme';
import { RecoilRoot } from 'recoil';
import SWRConfigContext from './utils/SWRConfigContext';
const App = () => {
  return (
    <>
      <Global styles={reset} />
      <SWRConfigContext>
        <RecoilRoot>
          <ThemeProvider theme={Theme}>
            <Router />
          </ThemeProvider>
        </RecoilRoot>
      </SWRConfigContext>
    </>
  );
};

export default App;
