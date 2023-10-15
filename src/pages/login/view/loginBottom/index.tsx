import { Button } from '@/common/button';
import * as s from './style';
import { useNavigateTo } from '@/hooks/useNavigate';

export const LoginBottom = () => {
  const navigateTo = useNavigateTo();

  return (
    <s.LoginBottom>
      <s.Text onClick={() => navigateTo('/Singup')}>회원가입</s.Text>
      <s.ButtonZone>
        <Button title="Login" color="black2" size="medium" />
      </s.ButtonZone>
    </s.LoginBottom>
  );
};
