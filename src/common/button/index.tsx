import * as s from './style';

type ButtonTypes = {
  children: React.ReactNode;
  size?: 'small' | 'medium';
  color?: 'white' | 'gray1' | 'black1' | 'black2';
  borderColor?: 'black2' | 'white';
};

export const Button = ({
  children,
  color = 'black2',
  borderColor = 'black2',
}: ButtonTypes) => {
  return (
    <s.Button color={color} borderColor={borderColor}>
      {children}
    </s.Button>
  );
};
