import {
  Dispatch,
  SetStateAction,
  ChangeEvent,
  useCallback,
  useState,
} from 'react';

export const useInput = <T>(
  initialState: T
): [
  T,
  (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  Dispatch<SetStateAction<T>>,
] => {
  const [form, setForm] = useState<T>(initialState);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value as unknown as T;

      setForm(value);
    },
    [setForm]
  );
  return [form, onChange, setForm];
};
/** 사실상 target안에 있는 value가 string이기때문에 string으로 고정해도 되지만
 * 일단은 저렇게 제너럴함수 써놓고 나중에 필요없으면 고치자 */
