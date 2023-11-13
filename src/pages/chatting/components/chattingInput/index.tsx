import { useEffect, useRef } from 'react';
import autosize from 'autosize';
import * as s from './style';

type ChattingInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
};

export const ChattingInput = ({
  value,
  onChange,
  onKeyDown,
}: ChattingInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textareaRef.current) {
      autosize(textareaRef.current);
    }
  }, []);

  return (
    <s.ChattingInput
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      ref={textareaRef}
    />
  );
};
