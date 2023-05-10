import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface ComponentProps {
  example?: any;
}

export type HomeProps = ComponentProps;

export const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <View style={styles.container}>
      <Text>{'Home'}</Text>
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
