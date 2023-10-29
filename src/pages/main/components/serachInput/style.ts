import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const SerachInput = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  border: none;
  background-color: ${Theme.colors.gray1};
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  background-color: ${Theme.colors.gray1};
`;
