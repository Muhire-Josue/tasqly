import { StyleSheet } from "react-native";
import { PRIMARY_COLOR_RED } from "../../../theme/colors";

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 22,
    marginTop: 24,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  cancelButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: PRIMARY_COLOR_RED,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 999,
  },
  cancelText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#000000",
  },
  formSection: {
    flexShrink: 0,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111",
    marginBottom: 8,
    marginTop: 10,
  },
  textInput: {
    borderWidth: 1.5,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: "#000",
    marginBottom: 20,
  },
  urgentRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  urgentLabel: {
    fontSize: 16,
    color: "#111",
    fontWeight: "500",
  },
  statusRow: {
    flexDirection: "row",
    marginTop: 16,
    gap: 16,
  },
  statusDropdownWrapper: {
    flex: 1,
    position: "relative",
    zIndex: 10,
  },
  statusSelector: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
  },
  statusSelectorText: {
    fontSize: 18,
    color: "#000",
    marginLeft: 12,
  },
  statusDropdownMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    marginTop: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
    zIndex: 20,
  },
  statusOptionRow: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  statusOptionText: {
    fontSize: 18,
    color: "#000",
  },
});

export default style;
