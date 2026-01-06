import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  container: {
    flex: 1,
    paddingHorizontal: 24,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 18,
    paddingBottom: 12,
  },

  title: {
    fontSize: 40,
    fontWeight: "400",
    color: "#111111",
    letterSpacing: 0.2,
  },

  iconPressed: {
    opacity: 0.6,
  },

  content: {
    flex: 1,
    paddingTop: 12,
  },
});

export default styles;
