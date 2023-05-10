import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

interface ComponentProps {
  onNavigateToOTPScreen: () => void;
}

export type SignInProps = ComponentProps;

export const SignIn: React.FunctionComponent<SignInProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>{'SignIn'}</Text>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={props.onNavigateToOTPScreen}>
        <Text>{'Click to navigate to OTP confirmation screen'}</Text>
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
