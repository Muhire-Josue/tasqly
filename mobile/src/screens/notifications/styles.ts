import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F7FAFB",
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
    paddingBottom: 8,
  },

  title: {
    fontSize: 30,
    fontWeight: "400",
    color: "#111111",
    letterSpacing: 0.2,
  },

  iconPressed: {
    opacity: 0.6,
  },

  actionsRow: {
    paddingTop: 10,
    paddingBottom: 8,
  },

  clearAllButton: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
  },

  clearAllText: {
    fontSize: 18,
    color: "#111",
    fontWeight: "500",
  },

  content: {
    flex: 1,
    paddingTop: 12,
  },

  sectionLabel: {
    fontSize: 26,
    fontWeight: "500",
    color: "#111",
    marginTop: 6,
  },

  dropdown: {
    position: "absolute",
    width: 220,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 14,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },

  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 10,
  },

  optionText: {
    fontSize: 20,
    color: "#111",
  },

  headerContainer: {
    paddingHorizontal: 24,
  },

  emptyWrap: {
    flex: 1,
    paddingHorizontal: 24,
  },
});

export default styles;
