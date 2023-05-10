import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface ComponentProps {
  example?: any;
}

export type SettingProps = ComponentProps;

export const Setting: React.FunctionComponent<SettingProps> = () => {
  return (
    <View style={styles.container}>
      <Text>{'Setting'}</Text>
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
