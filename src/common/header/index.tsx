import { Outlet } from 'react-router-dom';
import * as s from './style';
import { Button } from '../button';
import { Avatar } from '../avatar';
import { Hearts } from '@/assets/icon';

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
          <s.ProfileBox>
            <p>John Doe</p>
            <Hearts color="red" className="" />
          </s.ProfileBox>
          <div>
            <Button color="black2" borderColor="black2">
              Edit Profile
            </Button>
            <Button color="black1" borderColor="white">
              Logout
            </Button>
          </div>
        </s.RightSide>
      </s.Header>
      <Outlet />
    </>
  );
};
