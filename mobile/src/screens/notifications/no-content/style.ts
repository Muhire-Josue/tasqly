import { StyleSheet } from "react-native";
import { PRIMARY_COLOR_BLUE } from "../../../theme/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 80,
  },

  iconCircle: {
    width: 210,
    height: 210,
    borderRadius: 105,
    backgroundColor: PRIMARY_COLOR_BLUE,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
  },

  title: {
    fontSize: 30,
    fontWeight: "500",
    color: "#111",
    letterSpacing: 0.2,
  },

  emoji: {
    fontSize: 28,
  },
});

export default styles;
