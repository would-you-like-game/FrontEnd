import React from 'react';
import * as s from './style';
import { GradeGraph } from '../../components';

type GradeProps = {
  totalManner: number;
  totalParticipation: number;
  totalGamingSkill: number;
  totalEnjoyable: number;
  totalSociability: number;
  totalRating: number;
  numberOfEvaluations: number;
};

export const Grade = ({
  totalManner,
  totalParticipation,
  totalGamingSkill,
  totalEnjoyable,
  totalSociability,
  totalRating,
  numberOfEvaluations,
}: GradeProps) => {
  return (
    <s.Grade>
      <GradeGraph
        totalManner={totalManner}
        totalParticipation={totalParticipation}
        totalGamingSkill={totalGamingSkill}
        totalEnjoyable={totalEnjoyable}
        totalSociability={totalSociability}
      />
      <s.GradeText>
        <p>매너: {totalManner}</p>
        <p>참여도: {totalParticipation}</p>
        <p>게임실력: {totalGamingSkill}</p>
        <p>재미: {totalEnjoyable}</p>
        <p>사교성: {totalSociability}</p>
      </s.GradeText>
      <s.SideText>
        <p>총 점수: {totalRating}</p>
        <p>리뷰 개수: {numberOfEvaluations}</p>
      </s.SideText>
    </s.Grade>
  );
};
