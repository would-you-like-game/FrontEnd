import * as s from './style';
type inputProps = {
  type?: string;
  value?: string;
  placeholder?: string;
  children?: React.ReactNode; // children prop을 추가
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ children, type, value, onChange, placeholder }: inputProps) => {
  return (
    <>
      <s.Label>{children}</s.Label>
      <s.Input type={type} value={value} onChange={onChange} placeholder={placeholder}></s.Input>
    </>
  );
};

export default Input;
