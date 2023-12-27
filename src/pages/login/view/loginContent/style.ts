import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const LoginContent = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;

  button {
    margin: auto;
    margin-top: 30px;
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
