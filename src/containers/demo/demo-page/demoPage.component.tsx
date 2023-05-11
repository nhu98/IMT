import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { demoDatasource } from '@src/core/data/demo';
import { pxToPercentage } from '@src/core/libs/utils';
import { Picture } from '@src/containers/demo/demo-page/picture.component';

export const Demo: React.FunctionComponent = () => {
  // @ts-ignore
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={demoDatasource}
        renderItem={({ item }) => <Picture item={item} />}
        keyExtractor={(item) => item.yearId}
      />

      <View style={styles.wrapButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Share case to Leo Levin</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 1,
    backgroundColor: '#F8F8FF',
    width: '100%',
  },
  wrapButton: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: pxToPercentage(42),
  },
  button: {
    backgroundColor: '#D7D7D7',
    borderRadius: pxToPercentage(8),
    paddingTop: pxToPercentage(9),
    paddingBottom: pxToPercentage(9),
    paddingLeft: pxToPercentage(24),
    paddingRight: pxToPercentage(24),
    marginTop: pxToPercentage(10),
    opacity: 0.8,
  },
  text: {
    color: '#FFF',
    fontSize: pxToPercentage(14),
    fontWeight: '500',
  },
});
