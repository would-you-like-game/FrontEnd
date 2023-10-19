import { Button } from '@/common';
import * as s from './style';
import SignupContent from './view/signupContent';
export const Signup = () => {
  return (
    <s.Signup>
      <h1>GameCrew</h1>
      <SignupContent />
      <Button color="black1">Sign Up</Button>
    </s.Signup>
  );
};
