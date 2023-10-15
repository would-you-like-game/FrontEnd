import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';
export const LoginBottom = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

export const Text = styled.div`
  width: 100%;
  margin-top: 10px;
  color: ${Theme.colors.gray3};
  font-weight: ${Theme.fontWeights.normal};
  cursor: pointer;
`;

export const ButtonZone = styled.div`
  margin: auto;
  margin-top: 70px;
`;
