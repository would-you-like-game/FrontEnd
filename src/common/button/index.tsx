import * as s from './style';

type ButtonTypes = {
  title: string;
  size?: 'small' | 'medium';
  color?: 'gray1' | 'black1' | 'black2';
  borderColor?: 'black2' | 'white';
};

export const Button = ({ title, color = 'black2', borderColor = 'black2' }: ButtonTypes) => {
  return (
    <s.ButtonWrapper color={color} borderColor={borderColor}>
      {title}
    </s.ButtonWrapper>
  );
};
