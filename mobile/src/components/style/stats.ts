import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../../theme/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },

  statBox: {
    alignItems: "center",
    flex: 1,
  },

  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },

  statLabel: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "500",
  },

  statValue: {
    marginTop: 6,
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "700",
  },
});

export default styles;
