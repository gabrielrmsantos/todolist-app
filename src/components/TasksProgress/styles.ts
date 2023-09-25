import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tasksProgressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tasksProgress: {
    flexDirection: 'row'
  },
  tasksProgressText: {
    fontWeight: 'bold',
    marginRight: 12
  },
  tasksProgressTextDone: {
    color: '#8284FA'
  },
  tasksProgressTextCreated: {
    color: '#4EA8DE'
  },
});