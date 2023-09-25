import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import trashIcon from "../../assets/trash.png";
import checkedIcon from "../../assets/checked.png";
import uncheckedIcon from "../../assets/unchecked.png";

export type ITask = {
  description: string;
  done: boolean;
}

type Props = {
  description: string;
  done: boolean;
  onRemove: () => void;
  onCheck: () => void;
}

export function Task({ done, description, onRemove, onCheck }: Props) {
  return (
    <View style={[styles.taskContainer, !done && styles.taskContainerUndone]}>
      <TouchableOpacity onPress={onCheck}>
        <Image style={styles.taskCheckIcon} source={done ? checkedIcon : uncheckedIcon} />
      </TouchableOpacity>

      <Text style={done ? styles.taskDoneDescription : styles.taskDescription}>{description}</Text>

      <TouchableOpacity onPress={onRemove}>
        <Image style={styles.taskRemoveIcon} source={trashIcon} />
      </TouchableOpacity>
    </View>
  )
}