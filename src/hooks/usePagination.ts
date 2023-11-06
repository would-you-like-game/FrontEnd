import { pageState } from '@/recoil/postState';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useCallback } from 'react';

export const usePagination = (category: string, page: number) => {
  const setCurrentPage = useSetRecoilState(pageState);
  const navigate = useNavigate();
  const onNavigatePage = useCallback(() => {
    setCurrentPage(page);
    navigate(`/${category}?page=${page}`);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return onNavigatePage;
};
