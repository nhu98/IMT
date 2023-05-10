import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { SafeAreaView } from 'react-navigation';
import { pxToPercentage } from '@src/core/libs/utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IconElement } from '@src/assets/icons/icon.component';
import { textStyle } from '@src/components';
import { themes } from '@src/core/themes';

export interface ComponentProps {
  title?: string | undefined;
  backIcon?: () => IconElement | undefined;
  onBackPress?: () => void;
}

export type TopNavigationBarProps = ComponentProps;

export const TopNavigationBar: React.FunctionComponent<TopNavigationBarProps> = (
  props,
) => {
  const onBackButtonPress = () => {
    if (props.onBackPress) {
      props.onBackPress();
    }
  };

  const { title, backIcon } = props;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.75}
          style={styles.left}
          onPress={onBackButtonPress}>
          {backIcon && backIcon()}
        </TouchableOpacity>
        <View style={styles.center}>
          <Text style={styles.txtTitle}>{title}</Text>
        </View>
        <View style={styles.right} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: getStatusBarHeight(false),
    backgroundColor: themes['App Theme']['basic-light-color-1'],
  },
  container: {
    flexDirection: 'row',
    height: pxToPercentage(40),
    borderBottomWidth: pxToPercentage(0.5),
    borderColor: themes['App Theme']['dark-color-2'],
    backgroundColor: themes['App Theme']['basic-light-color-1'],
  },
  left: {
    justifyContent: 'center',
    alignItems: 'center',
    width: pxToPercentage(40),
    height: pxToPercentage(40),
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    justifyContent: 'center',
    alignItems: 'center',
    width: pxToPercentage(40),
  },
  txtTitle: {
    fontSize: pxToPercentage(15),
    ...textStyle.proTextSemibold,
  },
});
