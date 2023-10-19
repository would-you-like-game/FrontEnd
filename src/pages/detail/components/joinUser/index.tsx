import { userProps } from '@/type/type';
import * as s from './style';

export const JoinUser = ({ profileImg, nickname, temperature }: userProps) => {
  return (
    <s.JoinUser>
      <img src={profileImg} alt="profile Img" />
      <s.UserData>
        <div>{nickname}</div>
        <div>
          <s.HeartIcon color="red" />
          &nbsp;{temperature}
        </div>
      </s.UserData>
    </s.JoinUser>
  );
};
