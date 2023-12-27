import * as s from './style';
import { UserData } from '../components/userData';
import { LoginOption } from '../components/loginOption';
export const Right = () => {
  const token = localStorage.getItem('token');

  return (
    <s.Right>
      {token && <UserData />}
      <LoginOption />
    </s.Right>
  );
};
