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
          <Avatar />
          <div>
            <p>John Doe</p>
            <div>
              <Badge title="Gamer" />
              <Badge title="Developer" />
            </div>
            <span>Welcome to My page!</span>
          </div>
          <div>
            <Button title="Logout" color="gray1" />
            <Button title="Edit Profile" color="black" />
          </div>
        </s.RightSide>
      </s.HeaderWrapper>
      <Outlet />
    </>
  );
};
