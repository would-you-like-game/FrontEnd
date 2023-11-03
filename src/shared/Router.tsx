import React, { Suspense } from 'react';
import { Header } from '@/common/header';
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
const Edit = React.lazy(() =>
  import('../pages/edit/index').then(({ Edit }) => ({ default: Edit }))
);

const Mypage = React.lazy(() =>
  import('../pages/mypage/index').then(({ Mypage }) => ({ default: Mypage }))
);

const Chatting = React.lazy(() =>
  import('../pages/chatting/index').then(({ Chatting }) => ({
    default: Chatting,
  }))
);

const Main = React.lazy(() =>
  import('../pages/main/index').then(({ Main }) => ({ default: Main }))
);

const NotFound = React.lazy(() =>
  import('../pages/notFound/index').then(({ NotFound }) => ({
    default: NotFound,
  }))
);

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Main />} />
            <Route path="/:category" element={<Main />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/chatting" element={<Chatting />} />
            <Route path="/detail/:postId" element={<Detail />} />
            <Route path="/edit" element={<Edit />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
