import { ImageStyle, StyleProp } from 'react-native';
import { Icon, IconElement, IconSource } from './icon.component';

export { Icon, RemoteIcon } from './icon.component';
export type { IconSource } from './icon.component';

export const ArrowIOSBackIcon = (style: StyleProp<ImageStyle>): IconElement => {
  const source: IconSource = {
    imageSource: require('./source/arrow-ios-back.png'),
  };

  return Icon(source, style);
};

export const HomeIcon = (style: StyleProp<ImageStyle>): IconElement => {
  const source: IconSource = {
    imageSource: require('./source/home.png'),
  };

  return Icon(source, style);
};

export const SettingsIcon = (style: StyleProp<ImageStyle>): IconElement => {
  const source: IconSource = {
    imageSource: require('./source/settings.png'),
  };

  return Icon(source, style);
};

export const RadioButtonIcon = (style: StyleProp<ImageStyle>): IconElement => {
  const source: IconSource = {
    imageSource: require('./source/radio-button.png'),
  };

  return Icon(source, style);
};
