export type ColorsType = {
  white: string;
  gray1: string;
  gray2: string;
  gray3: string;
  black1: string;
  black2: string;
};

export type FontSizesType = {
  h1: string;
  h2: string;
  body1: string;
  body2: string;
  body3: string;
  body4: string;
  body5: string;
  body6: string;
};

export type FontWeightsType = {
  bold: string;
  semiBold: string;
  normal: string;
};

export interface ThemeType {
  colors: ColorsType;
  fontSizes: FontSizesType;
  fontWeights: FontWeightsType;
}

export interface ContenetType {
  page?: 'main';
}
