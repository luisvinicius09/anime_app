import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
  black: '#2D3748',
  white: '#FFF',
  green: '#34AA44',
  lightGreen: '#04C35C',
  lightGray: '#F5F5F5',
  gray: '#E5E5E5',
  lightBlue: '#4FC8F8',
  blue: '#009CD9',
  darkBlue: '#005273',
  lightOrange: '#FFB800',
  orange: '#FF6403',
  red: '#C30426',
  pixGreen: '#32BCAD',
};

export const SIZES = {
  // Global sizes
  base: 8,
  font: 14,
  radius: 8,
  padding: 24,

  // Font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  // App dimensions
  width,
  height,
};

export const FONTS = {
  h1: { fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22 },
  body1: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
