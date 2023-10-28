import { Button, Input } from '@/common';
import * as s from './style';
import { useNavigateTo } from '@/hooks/useNavigate';
import { useForm } from 'react-hook-form';
import { onSubmitLogin } from '@/apis/loginApi';

const LoginContent = () => {
  const navigateTo = useNavigateTo();
  const { register, handleSubmit } = useForm();

  return (
    <s.LoginContent onSubmit={handleSubmit(onSubmitLogin)}>
      <Input
        type="email"
        register={register('email', { required: true })}
        placeholder="Enter your e-mail"
      >
        E-mail
      </Input>
      <Input
        type="password"
        register={register('password', { required: true })}
        placeholder="Enter your password"
      >
        Password
      </Input>
      <s.Text onClick={() => navigateTo('/signup')}>회원가입</s.Text>
      <Button color="black2" size="medium" type="submit">
        Login
      </Button>
    </s.LoginContent>
  );
};

export default LoginContent;
