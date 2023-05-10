import { ViewStyle } from 'react-native';

export const viewStyle: { [key: string]: ViewStyle } = {
  shadow: {
    // shadow ios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.125,
    shadowRadius: 1.5,

    // shadow android
    elevation: 3,
  },
};
