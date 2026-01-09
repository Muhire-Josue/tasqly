import { StyleSheet } from "react-native";
import { PRIMARY_COLOR_BLUE } from "../../../theme/colors";

const styles = StyleSheet.create({
  // ...your existing styles

  noHouseSafe: {
    flex: 1,
    backgroundColor: "#F7FAFB",
  },
  noHouseRoot: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 22,
  },

  noHouseTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  noHouseTopLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  noHouseAvatarCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
  },
  noHouseGreeting: {
    fontSize: 24,
    fontWeight: "400",
    color: "#111",
  },
  noHousePlusBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },

  noHouseCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 40,
  },
  noHouseIconCircle: {
    width: 210,
    height: 210,
    borderRadius: 105,
    backgroundColor: PRIMARY_COLOR_BLUE,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 26,
  },
  noHouseTitle: {
    fontSize: 25,
    fontWeight: "500",
    color: "#111",
    textAlign: "center",
  },
  noHouseSubtitle: {
    marginTop: 8,
    fontSize: 18,
    // fontWeight: "400",
    color: "#111",
    textAlign: "center",
  },

  noHouseJoinBtn: {
    marginTop: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    backgroundColor: PRIMARY_COLOR_BLUE,
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 12,
    minWidth: 220,
  },
  noHouseJoinText: {
    fontSize: 26,
    fontWeight: "400",
    color: "#FFF",
  },
  noHouseAvatarImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
});

export default styles;
