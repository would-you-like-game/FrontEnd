// 이부분 swr get 요청으로 바꾸자 profile 불러오는 부분임
import { useCallback } from 'react';
import useSWR from 'swr';
import { useNavigateTo } from '@/hooks';
import { ResponseUserProfileType } from '@/type/response';
import * as s from './style';
import { Avatar, Button } from '@/common';

export const Right = () => {
  const navigateTo = useNavigateTo();
  const token = localStorage.getItem('token');
  const { data: user } = useSWR<ResponseUserProfileType>(token ? `user` : null);
  const deleteToken = useCallback(() => {
    localStorage.removeItem('token');
    window.location.reload();
  }, []);

  return (
    <s.RightSide>
      {user ? (
        <>
          <s.UserData>
            <Avatar size="medium" src={user.userImg} />
            <div className="nickname">{user.nickname}</div>
            <div className="temp">&nbsp;{23}</div>
          </s.UserData>
          <s.LoginOption>
            <Button
              onClick={() => navigateTo('/mypage')}
              color="black2"
              borderColor="black2"
            >
              Mypage
            </Button>
            <Button onClick={deleteToken} color="black1" borderColor="white">
              Logout
            </Button>
          </s.LoginOption>
        </>
      ) : (
        <s.LoginOption>
          <Button
            onClick={() => navigateTo('/login')}
            color="black1"
            borderColor="white"
          >
            Login
          </Button>
        </s.LoginOption>
      )}
    </s.RightSide>
  );
};
