import { Alert, FlatList, Image, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { ITask, Task } from "../../components/Task";
import { EmptyTaskList } from "../../components/EmptyTaskList";
import { styles } from "./stytles";
import plusIcon from "../../assets/plus.png";
import logo from "../../assets/logo.png";
import { TasksProgress } from "../../components/TasksProgress";

export function Home() {

  const [tasks, setTasks] = useState<ITask[]>([]);
  const [taskDescription, setTaskDescription] = useState('');

  function handleTaskAdd() {
    if (taskDescription === "") return Alert.alert("Ação inválida!", "Não é possível criar uma tarefa sem descrição.");
    if (tasks.findIndex(task => task.description === taskDescription) !== -1) return Alert.alert("Ação inválida!", "Já existe uma tarefa com essa descrição.");
    setTasks(prevState => [...prevState, {
      done: false,
      description: taskDescription
    }]);
    setTaskDescription("");
  }

  function handleTaskRemove(taskDescription: string) {
    return Alert.alert(
      "Remover tarefa",
      `Você realmente deseja remover a tarefa '${taskDescription}'?`,
      [{
        text: 'Sim',
        onPress: () => {
          setTasks(prevState => prevState.filter(task => task.description !== taskDescription));
        }
      }, {
        text: 'Não',
        style: 'cancel'
      }]
    );
  }

  function handleTaskStatusChange(taskDescription: string) {
    setTasks(prevState => prevState.map(task => {
      if (task.description === taskDescription) task.done = !task.done
      return task;
    }));
  }

  return (
    <>
      <View style={styles.headerContainer}>
        <Image style={styles.headerLogo} source={logo} />
      </View>

      <View style={styles.bodyContainer}>
        <View style={styles.taskForm}>
          <TextInput
            style={styles.taskInput}
            placeholderTextColor="#808080"
            placeholder="Adicione uma nova tarefa"
            onChangeText={text => setTaskDescription(text)}
            value={taskDescription}
          />

          <TouchableOpacity
            style={styles.taskAddButton}
            onPress={handleTaskAdd}
          >
            <Image style={styles.taskAddButtonIcon} source={plusIcon} />
          </TouchableOpacity>
        </View>

        <TasksProgress tasks={tasks} />

        <FlatList
          data={tasks}
          ListEmptyComponent={() => <EmptyTaskList />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.description}
          renderItem={
            ({ item }) => (
              <Task
                done={item.done}
                description={item.description}
                onCheck={() => handleTaskStatusChange(item.description)}
                onRemove={() => handleTaskRemove(item.description)}
              />
            )
          }
        />
      </View>
    </>
  );
}