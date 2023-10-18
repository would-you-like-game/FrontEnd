import { userProps } from '@/type/type';
import * as s from './style';

export const PostUser = ({
  userId,
  profileImg,
  nickname,
  temperature,
}: userProps) => {
  return (
    <s.PostUser>
      <img src={profileImg} alt="profile Img" />
      <s.UserData>
        <div className="nickname">{nickname}</div>
        <div className="temp">
          <s.HeartIcon color="red" />
          &nbsp;{temperature}
        </div>
      </s.UserData>
    </s.PostUser>
  );
};
