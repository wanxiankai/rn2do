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
    <View style={styles.taskItem}>
      <Pressable
        style={({pressed}) => pressed && styles.pressedItem}
        android_ripple={{color: '#450599'}}
        onPress={removeTask}>
        <Text style={styles.taskName}>{props.task.name}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: '#fff',
  },
  taskName: {
    padding: 8,
    color: '#fff',
  },
  pressedItem: {
    backgroundColor: '#450599',
    borderRadius: 6,
  },
});
export default TaskItem;
