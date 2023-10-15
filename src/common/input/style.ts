import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const Label = styled.label`
  size: ${Theme.fontSizes.body5};
  font-weight: ${Theme.fontWeights.bold};
  margin: 30px 0 5px 0;
`;
export const Input = styled.input`
  display: flex;
  padding: 15px 15px;
  font-size: ${Theme.fontSizes.body5};
  font-weight: ${Theme.fontWeights.normal};
  border-radius: 5px;
  border: 1px solid ${Theme.colors.gray1};
`;
