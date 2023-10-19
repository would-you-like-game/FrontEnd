import emotionReset from 'emotion-reset';
import styled from '@emotion/styled';
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
  #root {
    height: 100%;
  }
  body,
  html {
    font-family: 'TheJamsil5Bold';
    height: 100%;
    width: 1280px;
    margin: 0 auto;
  }
`;

export const ContentArea = styled.div`
  padding: 50px;
`;
