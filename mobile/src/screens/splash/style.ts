import { StyleSheet } from "react-native";
import { PRIMARY_COLOR_BLUE } from "../../theme/colors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR_BLUE,
    alignItems: "center",
    justifyContent: "center",
  },
  brand: {
    color: "white",
    fontSize: 56,
    fontWeight: "600",
    letterSpacing: 1,
  },
  subtitle: {
    marginTop: 10,
    color: "white",
    fontSize: 18,
    fontWeight: "300",
    letterSpacing: 1,
  },
});

export default styles;
