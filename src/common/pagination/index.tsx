import * as s from './style';
import { creatPageArray } from '@/utils/creatPageArray';
import { useRecoilState } from 'recoil';
import { pageState } from '@/recoil/postState';
import { useNavigateTo } from '@/hooks/useNavigate';
type PaginationProps = {
  totalPages: number;
  category: string;
};
export const Pagination = ({ totalPages, category }: PaginationProps) => {
  const navigateTo = useNavigateTo();
  const [currentPage, setCurrentPage] = useRecoilState(pageState);
  const pageArray = creatPageArray(totalPages, currentPage);

  return (
    <s.Pagination>
      {pageArray && (
        <>
          <s.Icon
            onClick={() => {
              navigateTo(`/${category}?page=1`);
              setCurrentPage(1);
            }}
            type="doubleLeft"
            size={20}
          />
          <s.Icon
            onClick={
              currentPage !== 1
                ? () => {
                    navigateTo(`/${category}?page=${currentPage - 1}`);
                    setCurrentPage((prev) => prev - 1);
                  }
                : () => {}
            }
            type="left"
            size={10}
          />
          {pageArray.map((page) => (
            <s.Page
              checked={currentPage === page}
              onClick={() => {
                navigateTo(`/${category}?page=${page}`);
                setCurrentPage(page);
              }}
              key={page}
            >
              {page}
            </s.Page>
          ))}
          <s.Icon
            onClick={
              currentPage !== totalPages
                ? () => {
                    navigateTo(`/${category}?page=${currentPage + 1}`);
                    setCurrentPage((prev) => prev + 1);
                  }
                : () => {}
            }
            type="right"
            size={10}
          />
          <s.Icon
            onClick={() => {
              navigateTo(`/${category}?page=${totalPages}`);
              setCurrentPage(totalPages);
            }}
            type="doubleRight"
            size={20}
          />
        </>
      )}
    </s.Pagination>
  );
};
