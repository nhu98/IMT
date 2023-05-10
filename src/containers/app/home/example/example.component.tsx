import { ExampleModel } from '@src/core/models/example/example.model';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface ComponentProps {
  examples: ExampleModel[];
}

export type ExampleProps = ComponentProps;

export const Example: React.FunctionComponent<ExampleProps> = () => {
  return (
    <View style={styles.container}>
      <Text>{'Example'}</Text>
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
