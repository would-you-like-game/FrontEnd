import { Button } from '@/common';
import { JoinUser, PostUser } from '../../components';
import * as s from './style';

type rightBottomProps = {
  postUser: boolean;
  category: string;
  number: string;
  nickname: string;
  profileImg: string;
  userId: number;
  temperature: number;
  participant: {
    nickname: string;
    profileImg: string;
    temperature: number;
    userId: number;
  }[];
};
const RightBottom = ({
  postUser,
  category,
  number,
  nickname,
  profileImg,
  userId,
  temperature,
  participant,
}: rightBottomProps) => {
  return (
    <s.RightBottom>
      <PostUser
        userId={userId}
        profileImg={profileImg}
        nickname={nickname}
        temperature={temperature}
      />
      <s.GameOptions>
        <Button color="white">인원수: {number}</Button>
        <Button>게임종류: {category}</Button>
      </s.GameOptions>

      <s.JoinUserZone>
        <s.JoinUser>
          {participant.map((el) => (
            <JoinUser
              key={el.userId}
              nickname={el.nickname}
              profileImg={el.profileImg}
              temperature={el.temperature}
            />
          ))}
        </s.JoinUser>
        {postUser && <Button>참가</Button>}
      </s.JoinUserZone>
    </s.RightBottom>
  );
};

export default RightBottom;
