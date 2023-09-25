import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 70,
    paddingHorizontal: 24,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
  },
  headerLogo: {
    height: 32,
    width: 110
  },
  bodyContainer: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#1A1A1A',
  },
  taskForm: {
    marginTop: -30,
    flexDirection: 'row',
    marginBottom: 32,
  },
  taskInput: {
    flex: 1,
    marginRight: 4,
    borderRadius: 5,
    color: '#fff',
    padding: 14,
    height: 56,
    backgroundColor: '#262626',
  },
  taskAddButton: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskAddButtonIcon: {
    width: 16,
    height: 16,
  },
});