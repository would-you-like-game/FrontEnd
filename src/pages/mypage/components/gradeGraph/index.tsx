import { Theme } from '@/styles/theme';
import * as s from './style';
import { ResponsiveRadar } from '@nivo/radar';

type GradeProps = {
  totalManner: number;
  totalParticipation: number;
  totalGamingSkill: number;
  totalEnjoyable: number;
  totalSociability: number;
};

export const GradeGraph = ({
  totalManner,
  totalParticipation,
  totalGamingSkill,
  totalEnjoyable,
  totalSociability,
}: GradeProps) => {
  const data = [
    {
      kind: '매너',
      userGrade: totalManner,
    },
    {
      kind: '참여도',
      userGrade: totalParticipation,
    },
    {
      kind: '게임실력',
      userGrade: totalGamingSkill,
    },
    {
      kind: '재미',
      userGrade: totalEnjoyable,
    },
    {
      kind: '사교성',
      userGrade: totalSociability,
    },
  ];
  return (
    <s.GradeGraph>
      <ResponsiveRadar
        data={data}
        keys={['userGrade']}
        indexBy="kind"
        margin={{ top: 60, right: 60, bottom: 30, left: 60 }}
        borderWidth={1}
        borderColor={Theme.colors.gray3}
        gridLabelOffset={30}
        gridLevels={10}
        gridShape="circular" //linear
        dotColor={Theme.colors.gray3}
        enableDotLabel={true}
        maxValue={10}
        colors={Theme.colors.gray3}
        fillOpacity={0.1}
      />
    </s.GradeGraph>
  );
};
