import * as s from './style';
import { Grade, MyProfile } from '..';
import useSWR from 'swr';

export const Profile = () => {
  const { data: userData } = useSWR(`user`);

  return (
    <s.Profile>
      <MyProfile
        userImg={userData.userImg}
        email={userData.email}
        nickname={userData.nickname}
      />
      <Grade //현재 값 없음
        totalManner={userData.result.totalManner}
        totalParticipation={userData.result.totalParticipation}
        totalGamingSkill={userData.result.totalGamingSkill}
        totalEnjoyable={userData.result.totalEnjoyable}
        totalSociability={userData.result.totalSociability}
        totalRating={userData.result.totalRating}
        numberOfEvaluations={userData.numberOfEvaluations}
      />
    </s.Profile>
  );
};
