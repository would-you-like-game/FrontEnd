import { Sidebar } from '@/common';
import * as s from './style';
import { ChattingBottom, ChattingMiddle } from './view';
export const Chatting = () => {
  return (
    <s.Chatting>
      <Sidebar />
      <s.Bottom>
        <ChattingMiddle />
        <ChattingBottom />
      </s.Bottom>
    </s.Chatting>
  );
};
