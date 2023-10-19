import { PostItem } from '@/common/postItem';
import * as s from './style';

export const PostList = () => {
  return (
    <>
      <s.PostList>
        <PostItem
          currnetNubmer={1}
          totalNubmer={8}
          temperature={20}
          nickname="Test1"
          title="test content "
          postId={1}
        />
        <PostItem
          currnetNubmer={1}
          totalNubmer={8}
          temperature={20}
          nickname="Test1"
          title="test content "
          postId={2}
        />
        <PostItem
          currnetNubmer={1}
          totalNubmer={8}
          temperature={20}
          nickname="Test1"
          title="test content "
          postId={3}
        />
      </s.PostList>
    </>
  );
};
