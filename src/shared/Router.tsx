import React, { Suspense } from 'react';
import { Header } from '@/common/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';

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

const Mypost = React.lazy(() =>
  import('../pages/mypage/view/mypost/index').then(({ Mypost }) => ({
    default: Mypost,
  }))
);

const Chatting = React.lazy(() =>
  import('../pages/chatting/index').then(({ Chatting }) => ({
    default: Chatting,
  }))
);

const ChattingContent = React.lazy(() =>
  import('../pages/chatting/view/chattingContent/index').then(
    ({ ChattingContent }) => ({
      default: ChattingContent,
    })
  )
);

const Main = React.lazy(() =>
  import('../pages/main/index').then(({ Main }) => ({ default: Main }))
);

const NotFound = React.lazy(() =>
  import('../pages/notFound/index').then(({ NotFound }) => ({
    default: NotFound,
  }))
);

const PrivateRoute = React.lazy(() =>
  import('./PrivateRoute').then(({ PrivateRoute }) => ({
    default: PrivateRoute,
  }))
);

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route element={<Header />}>
            <Route path="/" element={<Main />} />
            <Route path="/" element={<Main />} />
            <Route path="/:category" element={<Main />} />
            <Route path="/detail/:postId" element={<Detail />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route element={<Header />}>
              <Route path="/mypage" element={<Mypage />}>
                <Route path=":category" element={<Mypost />} />
              </Route>
              <Route path="/edit" element={<Edit />} />
              <Route path="/chatting" element={<Chatting />}>
                <Route path=":userId" element={<ChattingContent />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
