import { useCallback, useRef, useState } from 'react';
import * as s from './style';
import { Avatar } from '@/common';
export const UploadButton = () => {
  const [uploadImg, setUploadImg] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const onsetProfileHandler = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const uploadedProfile = e.target.files[0];
        setUploadImg(uploadedProfile);
      }
    },
    []
  );
  return (
    <div>
      {uploadImg && (
        <Avatar src={URL.createObjectURL(uploadImg)} size="large" />
      )}
      <input
        type="file"
        ref={fileRef}
        onChange={(e) => onsetProfileHandler(e)}
        style={{ display: 'none' }}
      />
      <s.Icons
        onClick={() => {
          fileRef.current?.click();
        }}
      />
    </div>
  );
};
