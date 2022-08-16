/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.taskInput}>
        <TextInput placeholder="请输入" />
        <View style={styles.btnGroup}>
          <Button title="取消" />
          <Button title="添加" />
        </View>
      </View>
      <Text>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskInput: {
    width: '100%',
    borderColor: 'red',
    borderWidth: 1,
  },

  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default App;
