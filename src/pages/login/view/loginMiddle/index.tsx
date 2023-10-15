import Input from '@/common/input';
import * as s from './style';

export const LoginMiddle = () => {
  return (
    <s.LoginMiddle>
      <Input type="email" placeholder="Enter your e-mail">
        E-mail
      </Input>
      <Input type="password" placeholder="Enter your password">
        Password
      </Input>
    </s.LoginMiddle>
  );
};
