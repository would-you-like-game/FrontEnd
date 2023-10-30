import { Outlet } from 'react-router-dom';
import * as s from './style';
import { Right } from './right';
export const Header = () => {
  return (
    <>
      <s.Header>
        <s.LeftSide>
          <a href="/" className="mainTitle">
            GameCrew
          </a>
          <span>Let's play an exciting game</span>
        </s.LeftSide>
        <Right />
      </s.Header>
      <Outlet />
    </>
  );
};
