import { Avatar, Button } from '@/common';
import * as s from './style';
import { useCallback, useState } from 'react';
import { useNavigateTo } from '@/hooks/useNavigateTo';
const [userName, temperature, userImg] = [
  'John Doe',
  23,
  'data:image/jpeg;base64,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',
];
// 이부분 swr get 요청으로 바꾸자 profile 불러오는 부분임
export const Right = () => {
  const navigateTo = useNavigateTo();
  const [token, SetToken] = useState<string | null>(
    localStorage.getItem('token')
  );
  const deleteToken = useCallback(() => {
    localStorage.removeItem('token');
    SetToken(null);
  }, [SetToken]);

  return (
    <s.RightSide>
      {token ? (
        <>
          <s.UserData>
            <Avatar size="medium" src={userImg} />
            <div className="nickname">{userName}</div>
            <div className="temp">&nbsp;{temperature}</div>
          </s.UserData>
          <s.LoginOption>
            <Button
              onClick={() => navigateTo('/mypage')}
              color="black2"
              borderColor="black2"
            >
              Edit Profile
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
