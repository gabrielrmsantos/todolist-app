import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    borderRadius: 5,
    padding: 12,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#262626',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  taskContainerUndone: {
    borderColor: '#333333',
  },
  taskDescription: {
    flex: 1,
    fontSize: 14,
    color: '#F2F2F2'
  },
  taskDoneDescription: {
    flex: 1,
    fontSize: 14,
    color: '#808080',
    textDecorationLine: 'line-through',
  },
  taskCheckIcon: {
    width: 17,
    height: 17,
  },
  taskRemoveIcon: {
    width: 12,
    height: 14,
  }
})