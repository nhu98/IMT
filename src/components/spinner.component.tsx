import React from 'react';
import { StatusBar, ActivityIndicator, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { AppState } from '@src/core/store';
import Modal from 'react-native-modal';
import { themes } from '@src/core/themes';

export const Spinner: React.FunctionComponent = () => {
  const appReducer = useSelector((state: AppState) => state.app);

  return (
    <Modal
      isVisible={appReducer.visibleSpinner}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={1}
      animationOutTiming={1}
      backdropOpacity={0}
      hasBackdrop={false}
      backdropTransitionInTiming={1}
      backdropTransitionOutTiming={1}
      style={styles.container}>
      <StatusBar hidden={false} barStyle="light-content" />
      <ActivityIndicator
        size={'small'}
        color={themes['App Theme']['main-color-1']}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
