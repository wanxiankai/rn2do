/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

type Task = {
  name: string;
  id: number;
};
const App = () => {
  const [currentTask, setCurrentTask] = useState<string>('');
  const [taskList, setTaskList] = useState<Task[]>([]);

  const onInput = (itext: string) => {
    setCurrentTask(itext);
  };

  const onAddTask = () => {
    setTaskList(currentTaskList => [
      ...currentTaskList,
      {name: currentTask, id: Math.random()},
    ]);
    setCurrentTask('');
  };
  return (
    <View style={styles.container}>
      <View style={styles.taskInput}>
        <TextInput
          onChangeText={onInput}
          style={styles.textInput}
          placeholder="请输入待做事项"
        />
        <Button title="添加" onPress={onAddTask} />
      </View>
      <View style={styles.taskList}>
        {taskList.map(task => {
          return (
            <Text style={styles.taskItem} key={task.id}>
              {task.name}
            </Text>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  taskInput: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    marginRight: 8,
    padding: 8,
  },
  taskList: {
    flex: 5,
  },
  taskItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: '#fff',
  },
});

export default App;
