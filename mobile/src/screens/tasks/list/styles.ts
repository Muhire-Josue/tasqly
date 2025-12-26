import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 24,
    backgroundColor: "#F6FBFC",
    position: "relative", // important so absolute children anchor correctly
  },
});

export default styles;
