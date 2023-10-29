import * as s from './style';
type inputProps = {
  type: string;
  value?: string;
  placeholder: string;
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  register?: any; //react-hook-form register 타입을 뭐라고 명시해야하지...?
};

export const Input = ({
  children,
  type,
  value,
  onChange,
  placeholder,
  register,
  readOnly,
}: inputProps) => {
  return (
    <s.InputContainer>
      <s.Label>{children}</s.Label>
      <s.Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...register}
        readOnly={readOnly}
      ></s.Input>
    </s.InputContainer>
  );
};
