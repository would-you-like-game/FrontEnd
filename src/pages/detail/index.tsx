import { ContentArea } from '@/styles/GlobalStyle';
import * as s from './style';
import { LeftBottom, Top } from './view';
import RightBottom from './view/rightBottom';
import { useGetPathname } from '@/hooks/useGetPathname';
import useSWR from 'swr';
export const Detail = () => {
  const pathname = useGetPathname();
  const postId = pathname[1];
  const { data: post } = useSWR(`post/${postId}`);
  return (
    <s.Detail>
      {post && (
        <ContentArea>
          <Top postId={post.postId} />
          <s.Bottom>
            <LeftBottom postId={post.postId} />
            <RightBottom postId={post.postId} />
          </s.Bottom>
        </ContentArea>
      )}
    </s.Detail>
  );
};
