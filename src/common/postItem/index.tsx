import * as s from './style';
type PostItemStyle = {
  title: string;
  nickname: string;
  temperature: number;
  currnetNubmer: number;
  totalNubmer: number;
};

export const PostItem = ({ title, nickname, temperature, totalNubmer, currnetNubmer }: PostItemStyle) => {
  return (
    <s.PostItem>
      <div></div>
      <s.Content>
        <span>{nickname}</span>
        <p>{title}</p>
        <div>
          <span>{temperature}</span>
          <span>{`${currnetNubmer}/${totalNubmer} `}</span>
        </div>
      </s.Content>
    </s.PostItem>
  );
};

// 아이콘 만들어야 함
