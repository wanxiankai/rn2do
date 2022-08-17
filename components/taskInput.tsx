import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';

interface IProps {
  onAddTask: (task: string) => void;
}

const TaskInput: React.FC<IProps> = props => {
  const [currentTask, setCurrentTask] = useState<string>('');

  const onInput = (itext: string) => {
    setCurrentTask(itext);
  };

  const addTask = () => {
    if (currentTask === '') {
      Alert.alert('提示', '任务不能为空', [
        {
          text: '好的',
          style: 'cancel',
        },
      ]);
      return;
    } else {
      props.onAddTask(currentTask);
      setCurrentTask('');
    }
  };

  return (
    <View style={styles.taskInput}>
      <TextInput
        value={currentTask}
        onChangeText={onInput}
        style={styles.textInput}
        placeholder="请输入待做事项"
      />
      <Button title="添加" onPress={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default TaskInput;
