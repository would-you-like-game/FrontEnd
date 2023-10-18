import * as s from './style';

type leftBottomProps = {
  createdAt: string;
  content: string;
};
export const LeftBottom = ({ createdAt, content }: leftBottomProps) => {
  return (
    <s.LeftBottom>
      <div className='date'>{createdAt}</div>
      <div className='content'>{content}</div>
    </s.LeftBottom>
  );
};
