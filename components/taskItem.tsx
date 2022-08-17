import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface IProps {
  name: string;
}

const TaskItem: React.FC<IProps> = props => {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskName}>{props.name}</Text>
    </View>
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
