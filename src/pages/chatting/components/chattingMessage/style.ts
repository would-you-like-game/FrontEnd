import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const ChattingMessage = styled.div<{ $isMe: boolean }>`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: ${({ $isMe }) => ($isMe ? 'flex-end' : 'flex-start')};
  width: 100%;
`;

export const UserData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  img {
    width: 65px;
    height: 65px;
    border-radius: 50px;
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const UserText = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 20px;
  background-color: ${Theme.colors.gray1};
  min-height: 75px;
  line-height: 20px;

  white-space: pre-wrap;
  word-break: break-all;
`;
