import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const ChattingInput = styled.textarea`
  width: 100%;
  border: 1px solid ${Theme.colors.gray1};
  border-radius: 8px;
  padding: 15px;
  font-size: ${Theme.fontSizes.body5};
  overflow: hidden;
`;
