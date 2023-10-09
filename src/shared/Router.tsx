import { Header } from '@/common/header';
import { Login, Main, Signup } from '@/pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Main />} />
        </Route>
        <Route element={<Login />} />
        <Route element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};
