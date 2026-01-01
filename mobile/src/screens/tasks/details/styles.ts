import { StyleSheet } from "react-native";
import { PRIMARY_COLOR_BLUE } from "../../../theme/colors";

const EDIT_BUTTON_WIDTH = 110;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8FCFF",
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },

  headerSideSpacer: {
    width: EDIT_BUTTON_WIDTH,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    color: "#000000",
  },
  editButton: {
    width: EDIT_BUTTON_WIDTH,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: PRIMARY_COLOR_BLUE,
    paddingVertical: 10,
    borderRadius: 10,
    marginLeft: 12,
  },
  editButtonPressed: {
    opacity: 0.9,
  },
  editIcon: {
    marginRight: 6,
  },
  editText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default styles;
