import React, { Suspense } from 'react';
import { Header } from '@/common/header';
import { Chatting, Main, Mypage } from '@/pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Login = React.lazy(() =>
  import('../pages/login/index').then(({ Login }) => ({ default: Login }))
);
const Signup = React.lazy(() =>
  import('../pages/signup/index').then(({ Signup }) => ({ default: Signup }))
);

const Detail = React.lazy(() =>
  import('../pages/detail/index').then(({ Detail }) => ({ default: Detail }))
);

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Main />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/chatting" element={<Chatting />} />
            <Route path="/detail/:postId" element={<Detail />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
