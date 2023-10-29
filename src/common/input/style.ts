import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 35px;
`;
export const Label = styled.label`
  size: ${Theme.fontSizes.body5};
  font-weight: ${Theme.fontWeights.bold};
`;
export const Input = styled.input<{ $stop: boolean }>`
  width: 100%;
  display: flex;
  padding: 15px 15px;
  font-size: ${Theme.fontSizes.body5};
  font-weight: ${Theme.fontWeights.normal};
  border-radius: 5px;
  border: 1px solid ${Theme.colors.gray1};
  background-color: ${({ readOnly }) =>
    readOnly ? Theme.colors.gray1 : Theme.colors.white};
  color: ${({ readOnly }) =>
    readOnly ? Theme.colors.gray3 : Theme.colors.black2};
`;
