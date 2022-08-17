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
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from 'react-native';

type Task = {
  name: string;
  id: string;
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
      {name: currentTask, id: Math.random().toString()},
    ]);
    setCurrentTask('');
  };
  return (
    <View style={styles.container}>
      <View style={styles.taskInput}>
        <TextInput
          value={currentTask}
          onChangeText={onInput}
          style={styles.textInput}
          placeholder="请输入待做事项"
        />
        <Button title="添加" onPress={onAddTask} />
      </View>
      <View style={styles.taskList}>
        <FlatList
          data={taskList}
          renderItem={task => (
            <View style={styles.taskItem}>
              <Text style={styles.taskName}>{task.item.name}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
          alwaysBounceVertical={false}
        />
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
  taskName: {
    color: '#fff',
  },
});

export default App;
