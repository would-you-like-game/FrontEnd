import * as s from './style';
import { GradeGraph } from '../../components';
import useSWR from 'swr';
import { UserProfile } from '@/type/response';

export const Grade = () => {
  const { data: userData } = useSWR<UserProfile>(`user`);
  const { result, numberOfEvaluations } = userData;
  return (
    <s.Grade>
      <GradeGraph
        totalManner={result.totalManner}
        totalParticipation={result.totalParticipation}
        totalGamingSkill={result.totalGamingSkill}
        totalEnjoyable={result.totalEnjoyable}
        totalSociability={result.totalSociability}
      />
      <s.GradeText>
        <p>매너: {result.totalManner}</p>
        <p>참여도: {result.totalParticipation}</p>
        <p>게임실력: {result.totalGamingSkill}</p>
        <p>재미: {result.totalEnjoyable}</p>
        <p>사교성: {result.totalSociability}</p>
      </s.GradeText>
      <s.SideText>
        <p>총 점수: {result.totalRating}</p>
        <p>리뷰 개수: {numberOfEvaluations}</p>
      </s.SideText>
    </s.Grade>
  );
};
