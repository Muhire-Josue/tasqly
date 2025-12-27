import { StyleSheet } from "react-native";
import { PRIMARY_COLOR_BLUE } from "../../theme/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingTop: 8,
    paddingHorizontal: 24,
    borderTopWidth: 0.5,
    borderTopColor: "#DDD",
    justifyContent: "space-between",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabItemPressed: {
    opacity: 0.7,
  },
  iconWrapper: {
    position: "relative",
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
    color: "#000",
  },
  labelActive: {
    color: PRIMARY_COLOR_BLUE,
    fontWeight: "600",
  },
  badge: {
    position: "absolute",
    top: -6,
    right: -12,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#E63946",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
  },
});

export default styles;
