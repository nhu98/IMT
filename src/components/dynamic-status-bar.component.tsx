import React from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar, ViewProps, StatusBarStyle } from 'react-native';

interface ComponentProps {
  barStyle: StatusBarStyle;
}

export type DynamicStatusBarProps = ViewProps & ComponentProps;

export const DynamicStatusBar: React.FunctionComponent<DynamicStatusBarProps> = (
  props,
) => {
  const getStatusBarContent = (): StatusBarStyle => {
    if (props.barStyle === 'light-content') {
      return 'light-content';
    } else {
      return 'dark-content';
    }
  };

  const androidStatusBarBgColor: string = styles.container.backgroundColor;
  const barStyle: StatusBarStyle = getStatusBarContent();

  return (
    <StatusBar
      translucent
      backgroundColor={androidStatusBarBgColor}
      barStyle={barStyle}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
});
