import { ChangeEvent, useCallback, useState } from 'react';

export const useInput = <T>(
  initialState: T
): [T, (event: ChangeEvent<HTMLInputElement>) => void] => {
  const [form, setForm] = useState<T>(initialState);

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value as unknown as T;

      setForm(value);
    },
    [setForm]
  );
  return [form, onChangeHandler];
};
/** 사실상 target안에 있는 value가 string이기때문에 string으로 고정해도 되지만
 * 일단은 저렇게 제너럴함수 써놓고 나중에 필요없으면 고치자 */
