import { StyleSheet } from "react-native";
// import { PRIMARY_COLOR } from "../../../theme/colors";

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 24,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  userRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },

  greetingText: {
    fontSize: 22,
    color: "#000",
  },

  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },

  addButtonPressed: {
    opacity: 0.6,
  },

  homeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
    marginLeft: 10,
  },

  homeText: {
    fontSize: 20,
    color: "#000",
    fontWeight: "500",
  },
  //   statsContainer: {
  //   backgroundColor: PRIMARY_COLOR,
  //   borderRadius: 20,
  //   paddingVertical: 18,
  //   paddingHorizontal: 12,
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   marginTop: 16,
  // },

  // statBox: {
  //   alignItems: "center",
  //   flex: 1,
  // },

  // rowCenter: {
  //   flexDirection: "row",
  //   alignItems: "center",
  // },

  // statLabel: {
  //   fontSize: 16,
  //   color: "#FFFFFF",
  //   fontWeight: "500",
  // },

  // statValue: {
  //   marginTop: 6,
  //   fontSize: 28,
  //   color: "#FFFFFF",
  //   fontWeight: "700",
  // },
});

export default styles;
