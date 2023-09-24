import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    padding: 24,
    backgroundColor: '#0D0D0D',
  },
  bodyContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: '#1A1A1A',
  },
  taskForm: {
    flexDirection: 'row'
  },
  taskInput: {
    flex: 1,
    marginRight: 4,
    borderRadius: 5,
    color: '#fff',
    padding: 14,
    height: 56,
    backgroundColor: '#262626',
    marginBottom: 30,
  },
  taskAddButton: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  }
});