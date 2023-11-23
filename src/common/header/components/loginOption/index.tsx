import { Button } from '@/common';
import { useNavigateTo } from '@/hooks';
import { sweetAlert } from '@/utils/sweetAlert2';
import * as s from './style';

export const LoginOption = () => {
  const navigateTo = useNavigateTo();
  const token = localStorage.getItem('token');
  return (
    <s.LoginOption>
      {token ? (
        <>
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
        </>
      ) : (
        <Button
          onClick={() => navigateTo('/login')}
          color="black1"
          borderColor="white"
        >
          Login
        </Button>
      )}
    </s.LoginOption>
  );
};
