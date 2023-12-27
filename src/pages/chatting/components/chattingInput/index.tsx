import { useEffect, useRef } from 'react';
import autosize from 'autosize';
import * as s from './style';

type ChattingInputProps = {
  value: string;
  setMsg;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
};

export const ChattingInput = ({
  value,
  setMsg,
  onChange,
  onKeyDown,
}: ChattingInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textareaRef.current) {
      if (value.trim() === '') {
        autosize.destroy(textareaRef.current);
        setMsg('');
      } else {
        autosize(textareaRef.current);
      }
    }
  }, [value]);

  return (
    <s.ChattingInput
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      ref={textareaRef}
    />
  );
};
