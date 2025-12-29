import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 24,
    backgroundColor: "#e7fafeff",
    position: "relative",
  },
  taskList: {
    marginTop: 20,
    flex: 1,
  },
  dropdown: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 6,
  },
  optionText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },
  listHeader: {
    marginBottom: 20,
  },
});

export default styles;
