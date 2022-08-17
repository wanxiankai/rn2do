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
import {StyleSheet, View, FlatList, Button, StatusBar} from 'react-native';
import TaskInput from './components/taskInput';
import TaskItem from './components/taskItem';

export type Task = {
  name: string;
  id: string;
};
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [taskList, setTaskList] = useState<Task[]>([]);

  const startAddTask = () => {
    setShowModal(true);
  };

  const cancelModal = () => {
    setShowModal(false);
  };

  const onAddTask = (currentTask: string) => {
    setTaskList(currentTaskList => [
      ...currentTaskList,
      {name: currentTask, id: Math.random().toString()},
    ]);
    setShowModal(false);
  };

  const onRemoveTask = (id: string) => {
    setTaskList([...taskList.filter(item => item.id !== id)]);
  };
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <Button title="添加新任务" color="#a978e9" onPress={startAddTask} />
        <TaskInput
          modalIsVisable={showModal}
          onAddTask={onAddTask}
          onCancelModal={cancelModal}
        />
        <View style={styles.taskList}>
          <FlatList
            data={taskList}
            renderItem={task => (
              <TaskItem task={task.item} onRemoveTask={onRemoveTask} />
            )}
            keyExtractor={item => item.id}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  taskList: {
    flex: 5,
  },
});

export default App;
