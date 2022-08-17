import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Task} from '../App';

interface IProps {
  onRemoveTask: (id: string) => void;
  task: Task;
}

const TaskItem: React.FC<IProps> = props => {
  const removeTask = () => {
    props.onRemoveTask(props.task.id);
  };
  return (
    <Pressable onPress={removeTask}>
      <View style={styles.taskItem}>
        <Text style={styles.taskName}>{props.task.name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
export default TaskItem;
