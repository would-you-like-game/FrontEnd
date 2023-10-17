import { Button } from '@/common/button';
import * as s from './style';
import { useNavigateTo } from '@/hooks/useNavigate';

export const LoginBottom = () => {
  const navigateTo = useNavigateTo();

  return (
    <s.LoginBottom>
      <s.Text onClick={() => navigateTo('/signup')}>회원가입</s.Text>
      <s.ButtonZone>
        <Button color="black2" size="medium">
          Login
        </Button>
      </s.ButtonZone>
    </s.LoginBottom>
  );
};
