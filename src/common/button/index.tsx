import * as s from './style';

type ButtonTypes = {
  children: React.ReactNode;
  size?: 'small' | 'medium';
  color?: 'white' | 'gray1' | 'black1' | 'black2' | 'none';
  borderColor?: 'black2' | 'white';
  type?: 'button' | 'submit' | 'reset';
  cursor?: 'pointer' | 'default';
  onClick?: () => void;
};

export const Button = ({
  children,
  color = 'black2',
  borderColor = 'black2',
  onClick,
  cursor = 'pointer',
}: ButtonTypes) => {
  return (
    <s.Button
      color={color}
      borderColor={borderColor}
      onClick={onClick}
      cursor={cursor}
    >
      {children}
    </s.Button>
  );
};
