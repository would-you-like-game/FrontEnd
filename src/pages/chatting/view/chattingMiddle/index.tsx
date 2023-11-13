import { ChattingMessage } from '../../components';
import * as s from './style';
export const ChattingMiddle = ({ chat, nickname }) => {
  return (
    <s.ChattingMiddle>
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
