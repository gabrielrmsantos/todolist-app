import { Text, View } from "react-native";
import { Badge } from "../Badge";
import { ITask } from "../Task";
import { styles } from "./styles";

type Props = {
  tasks: ITask[]
}

export function TasksProgress({ tasks }: Props) {
  return (
    <View style={styles.tasksProgressContainer}>
      <View style={styles.tasksProgress}>
        <Text style={[styles.tasksProgressText, styles.tasksProgressTextCreated]}>Criadas</Text>
        <Badge value={tasks.length} />
      </View>

      <View style={styles.tasksProgress}>
        <Text style={[styles.tasksProgressText, styles.tasksProgressTextDone]}>Concluídas</Text>
        <Badge value={tasks.reduce((acc, task) => acc += task.done ? 1 : 0, 0)} />
      </View>
    </View>
  );
}