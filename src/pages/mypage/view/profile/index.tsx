import * as s from './style';
import { Grade, MyProfile } from '..';
import useSWR from 'swr';

export const Profile = () => {
  const { data: userData } = useSWR(`user`);

  return (
    <s.Profile>
      {userData && (
        <>
          <MyProfile
            userImg={userData.userImg}
            email={userData.email}
            nickname={userData.nickname}
          />
          <Grade />
        </>
      )}
    </s.Profile>
  );
};
