import emotionReset from 'emotion-reset';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ContenetType } from '@/type/themeType';

export const reset = css`
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff')
      format('woff');
    font-weight: normal;
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
    width: 100%;
    height: 100vh;
    font-family: 'GmarketSansMedium';
    width: 1280px;
    margin: 0 auto;
    box-sizing: border-box;
    input {
      font-family: 'GmarketSansMedium';
    }
    button {
      font-family: 'GmarketSansMedium';
    }
  }
  body,
  html {
  }
`;

export const ContentArea = styled.div<ContenetType>`
  display: flex;
  flex-direction: column;
  padding: 50px;
  height: 100%;
  width: 100%;
`;
