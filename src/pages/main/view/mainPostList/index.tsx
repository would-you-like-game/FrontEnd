import useSWR from 'swr';
import { useRecoilValue } from 'recoil';
import { sidebarState } from '../../../../recoil/sidebarState';
import { Pagination, PostItem } from '@/common';
import * as s from './style';
import { ResponseTotalPostType } from '@/type/response';
import { pageState } from '@/recoil/postState';

export const MainPostList = () => {
  const page = useRecoilValue(pageState);
  const category = useRecoilValue(sidebarState);
  const { data, isLoading } = useSWR<ResponseTotalPostType>(
    category ? `/post?page=${page}&category=${category}&size=10` : null
  );
  if (isLoading) {
    return <div>자는중임</div>;
  }

  return (
    <s.MainPostList>
      {data && (
        <>
          <s.ItemBox>
            {data.result.map((post) => (
              <PostItem
                key={post.postId}
                currentNumber={post.currentNumber}
                totalNumber={post.totalNumber}
                nickname={post.nickname}
                title={post.title}
                postId={post.postId}
                userImg={post.userImg}
              />
            ))}
          </s.ItemBox>
          <Pagination
            totalPages={data.pageable.totalPages}
            category={category}
          />
        </>
      )}
    </s.MainPostList>
  );
};
