import { Outlet } from 'react-router-dom';
import * as s from './style';
import { Button } from '../button';
import { Avatar } from '../avatar';

export const Header = () => {
  return (
    <>
      <s.Header>
        <s.LeftSide>
          <h2>GameCrew</h2>
          <span>Let's play an exciting game</span>
        </s.LeftSide>
        <s.RightSide>
          <Avatar size="medium" />
          <div>
            <p>John Doe</p>
          </div>
          <div>
            <Button
              children="Edit Profile"
              color="black2"
              borderColor="black2"
            />
            <Button children="Logout" color="black1" borderColor="white" />
          </div>
        </s.RightSide>
      </s.Header>
      <Outlet />
    </>
  );
};
