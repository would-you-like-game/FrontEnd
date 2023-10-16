import emotionReset from 'emotion-reset';
import { css } from '@emotion/react';

export const reset = css`
  @font-face {
    font-family: 'TheJamsil5Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2')
      format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  ${emotionReset}

  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  h2 {
    font-family: 'Orbitron', sans-serif;
  }

  body {
    font-family: 'TheJamsil5Bold';
  }
`;
