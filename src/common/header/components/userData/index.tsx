import * as s from './style';
import fallbackImg from '@/assets/fallbackImg.jpg';
import { Avatar } from '@/common';
import { ResponseUserProfileType } from '@/type/response';
import useSWR from 'swr';

export const UserData = () => {
  const token = localStorage.getItem('token');
  const { data: user } = useSWR<ResponseUserProfileType>(token ? `user` : null);

  return (
    <s.UserData>
      {user && (
        <>
          <Avatar size="medium" src={user.userImg ?? fallbackImg} />
          <div className="nickname">{user.nickname}</div>
          <div className="temp">&nbsp;{user.result.totalRating}</div>
        </>
      )}
    </s.UserData>
  );
};
