import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./stytles";
// import plusIcon from "../../assets/plus.svg";
import { useState } from "react";

export function Home() {

  // const [ tasks, setTasks ] = useState<string[]>([]);
  const [ tasks, setTasks ] = useState<string[]>(["Comprar bala"]);
  const [ taskDescription, setTaskDescription ] = useState('');

  function handleTaskAdd() {
    if(taskDescription === "") return false;
    if(tasks.includes(taskDescription)) return false;
    setTasks(prevState => [...prevState, taskDescription]);
  }

  return (
    <>
      <View style={ styles.headerContainer }>
        <Text>Home</Text>
      </View>

      <View style={ styles.bodyContainer }>
        <View style={ styles.taskForm }>
          <TextInput
            style={ styles.taskInput }
            placeholderTextColor="#808080"
            placeholder="Adicione uma nova tarefa"
            onChangeText={ text => setTaskDescription(text) }
            value={ taskDescription }
          />

          <TouchableOpacity 
            style={ styles.taskAddButton }
            onPress={ handleTaskAdd }
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        
        <FlatList
          data={ tasks }
          renderItem={ ({ item }) => (<Text>{ item }</Text>) }
        />
      </View>
    </>
  );
}