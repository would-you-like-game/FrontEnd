import Input from '@/common/input';
import * as s from './style';

const SignupContent = () => {
  return (
    <s.SignupContent>
      <Input type="email" placeholder="Enter your e-mail">
        E-mail
      </Input>
      <Input type="text" placeholder="Enter your nickname">
        Nickname
      </Input>
      <Input type="password" placeholder="Enter your password">
        Password
      </Input>
      <Input type="password" placeholder="Re-enter your password">
        Password Verification
      </Input>
    </s.SignupContent>
  );
};

export default SignupContent;
