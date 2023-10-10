import { Outlet } from 'react-router-dom';
import * as s from './style';
import { Button } from '../button';
import { Avatar } from '../avatar';
import { Badge } from '../badge';

export const Header = () => {
  return (
    <>
      <s.HeaderWrapper>
        <s.LeftSide>
          <h2>겜크루들</h2>
          <span>나와 게임에 조인할래?</span>
        </s.LeftSide>
        <s.RightSide>
          <Avatar size="medium" />
          <div>
            <p>John Doe</p>
            <div>
              <Badge title="Gamer" />
              <Badge title="Developer" />
            </div>
            <span>Welcome to My page!</span>
          </div>
          <div>
            <Button title="Logout" color="black1" borderColor="white" />
            <Button title="Edit Profile" color="black2" borderColor="black2" />
          </div>
        </s.RightSide>
      </s.HeaderWrapper>
      <Outlet />
    </>
  );
};
