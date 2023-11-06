import { useLocation } from 'react-router-dom';

export const useGetPathname = () => {
  const location = useLocation();
  const pathname = location.pathname.split('/').filter((x) => x);

  return pathname;
};
