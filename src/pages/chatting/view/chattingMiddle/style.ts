import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const ChattingMiddle = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(100% - 110px);
  gap: 25px;
  padding: 50px 50px 30px 50px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    height: 30%;
    background: ${Theme.colors.gray3};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: ${Theme.colors.gray1};
    flex-wrap: nowrap;
  }
`;
