import { Button } from '@/common';
import * as s from './style';
import SignupContent from './view/signupContent';
export const Signup = () => {
  return (
    <s.Signup>
      <h1>GameCrew</h1>
      <SignupContent />
      <Button title="Sign Up" color="black1" />
    </s.Signup>
  );
};
