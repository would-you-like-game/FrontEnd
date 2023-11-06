import { ChattingMessage } from '../../components';
import * as s from './style';
export const ChattingMiddle = () => {
  const mockData = [
    {
      id: 0,
      url: '',
      nickname: '찡짱',
      text: '구스구스 신청하셨죠? 안녕하세요 게시물 주인장 찡짱입니다',
      isMe: false,
    },
    {
      id: 1,
      url: '',
      nickname: '찡짱',
      text: '다름이 아니오라 게시물 신청하셔서 괜찮은 시간대 알기 위해 연락드렸습니다',
      isMe: false,
    },
    {
      id: 2,
      url: '',
      nickname: '찡짱',
      text: '또한 마이크가 필수는 아니지만 인보이스도 되시나요?',
      isMe: false,
    },
    {
      id: 3,
      url: '',
      nickname: '구스조아',
      text: '전 오전만 아니면 시간대 괜찮고 인보 됩니다!!',
      isMe: true,
    },
  ];
  return (
    <s.ChattingMiddle>
      {mockData?.map((el) => (
        <ChattingMessage
          key={el.id}
          url={el.url}
          nickname={el.nickname}
          text={el.text}
          isMe={el.isMe}
        />
      ))}
    </s.ChattingMiddle>
  );
};
