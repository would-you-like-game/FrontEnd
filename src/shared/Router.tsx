import { Header } from '@/common';
import { Chatting, Login, Main, Mypage, Signup } from '@/pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/main" element={<Main />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/chatting" element={<Chatting />} />
        </Route>
        <Route element={<Login />} />
        <Route element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};
