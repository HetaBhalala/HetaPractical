import { Dimensions } from 'react-native';

let deviceRatio =
  Dimensions.get('window').height / Dimensions.get('window').width;
const isTab = deviceRatio < 1.6;

const getFontSize = (size) => {
  if (isTab) {
    size = size * 1.4;
  }
  return size;
};

export const font = {
    family: {},
    size: {
      nano: getFontSize(11),
      mini: getFontSize(12),
      small: getFontSize(13),
      base: getFontSize(14),
      semi: getFontSize(15),
      md: getFontSize(16),
      lg: getFontSize(18),
      semiLg: getFontSize(20),
      xl: getFontSize(24),
      xxl: getFontSize(27),
    },
  };