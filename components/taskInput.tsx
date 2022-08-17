import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Modal,
  Image,
} from 'react-native';

interface IProps {
  onAddTask: (task: string) => void;
  onCancelModal: () => void;
  modalIsVisable: boolean;
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
    <Modal visible={props.modalIsVisable} animationType="slide">
      <View style={styles.taskInput}>
        <Image
          style={styles.imgage}
          source={require('../assets/images/images.png')}
        />
        <TextInput
          value={currentTask}
          onChangeText={onInput}
          style={styles.textInput}
          placeholder="请输入待做事项"
        />
        <View style={styles.btnGroup}>
          <View style={styles.button}>
            <Button
              title="取消"
              onPress={props.onCancelModal}
              color="#b180f1"
            />
          </View>
          <View style={styles.button}>
            <Button title="添加" onPress={addTask} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  taskInput: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b',
  },
  imgage: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    width: '100%',
    padding: 8,
  },
  btnGroup: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

export default TaskInput;
