import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const Signup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  width: 600px;

  h1 {
    margin-bottom: 45px;
    font-size: ${Theme.fontSizes.h1};
    font-weight: ${Theme.fontWeights.bold};
  }
`;
