import * as s from './style';

type chattingMessageProps = {
  url: string;
  nickname: string;
  text: string;
  isMe: boolean;
};

export const ChattingMessage = ({
  url,
  nickname,
  text,
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
      <s.UserText>{text}</s.UserText>
    </s.ChattingMessage>
  );
};
