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
import {StyleSheet, View, FlatList} from 'react-native';
import TaskInput from './components/taskInput';
import TaskItem from './components/taskItem';

type Task = {
  name: string;
  id: string;
};
const App = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);

  const onAddTask = (currentTask: string) => {
    setTaskList(currentTaskList => [
      ...currentTaskList,
      {name: currentTask, id: Math.random().toString()},
    ]);
  };
  return (
    <View style={styles.container}>
      <TaskInput onAddTask={onAddTask} />
      <View style={styles.taskList}>
        <FlatList
          data={taskList}
          renderItem={task => <TaskItem name={task.item.name} />}
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
  taskList: {
    flex: 5,
  },
});

export default App;
