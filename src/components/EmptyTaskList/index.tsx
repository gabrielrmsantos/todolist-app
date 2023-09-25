import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import clipboardIcon from "../../assets/clipboard.png";

export function EmptyTaskList() {
  return (
    <View style={ styles.emptyListContainer }>
      <Image style={ styles.emptyListIcon } source={ clipboardIcon } />

      <Text style={ styles.emptyListTitle }>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={ styles.emptyListText }>
        Crie tarefas e organize seus itens à fazer
      </Text>
    </View>
  );
}