import React from 'react';
import { StyleSheet } from 'react-native';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';

export type ScrollableAvoidKeyboardProps = KeyboardAwareScrollViewProps;

export const ScrollableAvoidKeyboard: React.FunctionComponent<ScrollableAvoidKeyboardProps> = (
  props,
) => {
  const { style, contentContainerStyle, ...restProps } = props;

  return (
    <KeyboardAwareScrollView
      bounces={false}
      bouncesZoom={false}
      alwaysBounceVertical={false}
      alwaysBounceHorizontal={false}
      style={[styles.container, style]}
      contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
      enableOnAndroid={true}
      {...restProps}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
});
