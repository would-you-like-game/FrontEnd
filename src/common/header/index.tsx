import { Outlet } from 'react-router-dom';
import * as s from './style';
import { Right } from './right';
import { Left } from './left';
export const Header = () => {
  return (
    <>
      <s.Header>
        <Left />
        <Right />
      </s.Header>
      <Outlet />
    </>
  );
};
