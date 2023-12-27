import * as s from './style';

type chattingMessageProps = {
  url: string;
  nickname: string;
  msg: string;
  isMe: boolean;
};

export const ChattingMessage = ({
  url,
  nickname,
  msg,
  isMe,
}: chattingMessageProps) => {
  return (
    <s.ChattingMessage $isMe={isMe}>
      {!isMe && (
        <s.UserData>
          <img src={url} alt="userImg" />
          <div>{nickname}</div>
        </s.UserData>
      )}
      <s.UserText>{msg}</s.UserText>
    </s.ChattingMessage>
  );
};
