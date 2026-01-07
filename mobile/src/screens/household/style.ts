import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    alignItems: "flex-start", // 🔴 IMPORTANT
  },
  container: {
    flex: 1,
  },

  imageWrapper: {
    width: "100%",
    height: 260,
    position: "relative",
    backgroundColor: "#E5E7EB",
  },

  houseImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  editBadge: {
    position: "absolute",
    right: 16,
    bottom: 16,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 12,
    width: "100%",
    paddingTop: 16,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: "600",
    color: "#111",
  },
  root: {
    flex: 1,
    backgroundColor: "#F7FAFB",
  },
});

export default styles;
