// 이부분 swr get 요청으로 바꾸자 profile 불러오는 부분임
import useSWR from 'swr';
import { useNavigateTo } from '@/hooks';
import { ResponseUserProfileType } from '@/type/response';
import * as s from './style';
import { Avatar, Button } from '@/common';
import { sweetAlert } from '@/utils/sweetAlert2';

export const Right = () => {
  const navigateTo = useNavigateTo();
  const token = localStorage.getItem('token');
  const { data: user } = useSWR<ResponseUserProfileType>(token ? `user` : null);

  return (
    <s.RightSide>
      {user ? (
        <>
          <s.UserData>
            <Avatar size="medium" src={user.userImg} />
            <div className="nickname">{user.nickname}</div>
            <div className="temp">&nbsp;{user.result.totalRating}</div>
          </s.UserData>
          <s.LoginOption>
            <Button
              onClick={() => navigateTo('/mypage')}
              color="black2"
              borderColor="black2"
            >
              Mypage
            </Button>
            <Button
              onClick={() => sweetAlert('logout')}
              color="black1"
              borderColor="white"
            >
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
