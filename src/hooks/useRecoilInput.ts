import { ChangeEvent, useCallback } from 'react';
import { useRecoilState, RecoilState } from 'recoil';

export const useRecoilInput = <T>(
  initialState: RecoilState<T>
): [
  T,
  (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void,
] => {
  const [form, setForm] = useRecoilState<T>(initialState);

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      if (name === 'totalNumber') {
        const newForm = {
          ...form,
          [name]: Number(value) ? Number(value) : '',
        };
        setForm(newForm);
      } else {
        const newForm = {
          ...form,
          [name]: value,
        };
        setForm(newForm);
      }
    },
    [form, setForm]
  );
  return [form, onChangeHandler];
};

/**
 *
 */
