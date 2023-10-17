import { PostItem } from '@/pages/main/components/postItem';
import * as s from './style';

export const Content = () => {
  return (
    <>
      <s.PostList>
        <PostItem
          currnetNubmer={1}
          totalNubmer={8}
          temperature={20}
          nickname="Test1"
          title="test content "
        />
        <PostItem
          currnetNubmer={1}
          totalNubmer={8}
          temperature={20}
          nickname="Test1"
          title="test content "
        />
        <PostItem
          currnetNubmer={1}
          totalNubmer={8}
          temperature={20}
          nickname="Test1"
          title="test content "
        />
      </s.PostList>
    </>
  );
};
