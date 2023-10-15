import React, { Suspense } from 'react';
import { Header } from '@/common/header';
import { Main } from '@/pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Login = React.lazy(() => import('../pages/login/index').then(({ Login }) => ({ default: Login })));
const Signup = React.lazy(() => import('../pages/signup/index').then(({ Signup }) => ({ default: Signup })));

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Main />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
