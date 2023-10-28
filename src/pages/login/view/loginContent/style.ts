import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const LoginContent = styled.form`
  width: 100%;

  button {
    margin: auto;
    margin-top: 75px;
  }
`;

export const Text = styled.div`
  width: 100%;
  text-align: end;
  margin-top: 10px;
  color: ${Theme.colors.gray3};
  font-weight: ${Theme.fontWeights.normal};
  cursor: pointer;
`;
