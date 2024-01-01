import { useCallback, useEffect, useRef, useState } from 'react';
import * as s from './style';
import { Avatar } from '@/common';
import { onChangeUserImage } from '@/apis/mypage/api';
export const UploadButton = ({ userImg }: { userImg: string }) => {
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
  useEffect(() => {
    onChangeUserImage(uploadImg).then((result) => {
      console.log(result);
    });
  }, [uploadImg]);

  return (
    <div>
      {uploadImg ? (
        <Avatar src={URL.createObjectURL(uploadImg) ?? userImg} size="large" />
      ) : (
        <Avatar src={userImg} size="large" />
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
