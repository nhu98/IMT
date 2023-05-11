import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { pxToPercentage } from '@src/core/libs/utils';
import { IconElement } from '@src/assets/icons/icon.component';
import { themes } from '@src/core/themes';
import { textStyle } from '@src/components';

export interface ComponentProps {
  title?: string | undefined;
  backIcon?: () => IconElement | undefined;
  onBackPress?: () => void;
}

export type TopNavigationBarProps = ComponentProps;

export const TopBarDemo: React.FunctionComponent<TopNavigationBarProps> = (
  props,
) => {
  const { title } = props;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.txtTitle}>{title}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: themes['App Theme']['basic-light-color-1'],
  },
  container: {
    flexDirection: 'row',
    height: pxToPercentage(52),
    backgroundColor: themes['App Theme']['basic-light-color-1'],
    elevation: 5,
    shadowColor: themes['App Theme']['shadow-grey-color-1'],
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 5 },
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: pxToPercentage(18),
    fontWeight: '700',
    color: themes['App Theme']['purple-color-1'],
    ...textStyle.proTextSemibold,
  },
});
