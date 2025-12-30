import { StyleSheet } from "react-native";
import { PRIMARY_COLOR_RED } from "../../../theme/colors";
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#000000",
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
  formSection: {
    flexShrink: 0,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#111",
    marginBottom: 8,
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
  statusDropdownWrapper: {
    flex: 1,
    marginTop: 16,
    // position: "relative",
  },

  statusSelector: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 18,
    paddingVertical: 12,
  },

  statusSelectorText: {
    fontSize: 18,
    marginLeft: 12,
    color: "#000",
  },

  statusDropdownMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    marginTop: 6,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },

  statusOptionRow: {
    paddingVertical: 8,
    paddingHorizontal: 18,
  },

  statusOptionText: {
    fontSize: 18,
    color: "#000",
  },

  statusSummaryRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },

  statusSummaryLabel: {
    fontSize: 16,
    color: "#8A8A8A",
    marginRight: 6,
  },

  statusSummaryValue: {
    flexDirection: "row",
    alignItems: "center",
  },

  statusSummaryText: {
    fontSize: 16,
    color: "#000",
  },
});

export default styles;
