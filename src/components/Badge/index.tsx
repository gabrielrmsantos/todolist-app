import { Text } from "react-native";
import { styles } from "./styles";

type Props = {
  value: number;
}

export function Badge({ value }: Props) {
  return (
    <Text style={styles.badge}>{value}</Text>
  )
}