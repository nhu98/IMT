import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

interface ComponentProps {
  onNavigateToAppScreen: () => void;
}

export type OTPConfirmationProps = ComponentProps;

export const OTPConfirmation: React.FunctionComponent<OTPConfirmationProps> = (
  props,
) => {
  return (
    <View style={styles.container}>
      <Text>{'OTPConfirmation'}</Text>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={props.onNavigateToAppScreen}>
        <Text>{'Click to navigate to Home screen'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
