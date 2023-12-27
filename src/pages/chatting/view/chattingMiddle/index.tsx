import { useRef, useEffect } from 'react';
import { ChattingMessage } from '../../components';
import * as s from './style';
export const ChattingMiddle = ({ chat, nickname }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chat]);

  return (
    <s.ChattingMiddle ref={scrollRef}>
      {chat?.map((el, i) => (
        <ChattingMessage
          key={i}
          url={el.url}
          nickname={el.nickname}
          msg={el.msg}
          isMe={el.nickname === nickname ? true : false}
        />
      ))}
    </s.ChattingMiddle>
  );
};
