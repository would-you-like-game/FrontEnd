import * as s from './style';

type chattingMessageProps = {
  nickname: string;
  text: string;
};

export const ChattingMessage = ({ nickname, text }: chattingMessageProps) => {
  nickname = '구스조아';
  text = '구스구스덕 신청하셨죠?';
  return (
    <s.ChattingMessage>
      <div>
        <img></img>
        <div>{nickname}</div>
      </div>
      <div>{text}</div>
    </s.ChattingMessage>
  );
};
