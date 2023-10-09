export type ColorsType = {
  white: string;
  gray1: string;
  gray2: string;
  gray3: string;
  black: string;
};

export type FontSizesType = {
  h1: string;
  h2: string;
  body1: string;
  body2: string;
  body3: string;
  body4: string;
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
