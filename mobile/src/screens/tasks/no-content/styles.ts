import { StyleSheet } from "react-native";
import { PRIMARY_COLOR_BLUE } from "../../../theme/colors";

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 28,
  },

  iconCircle: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: PRIMARY_COLOR_BLUE,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
  },

  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#111",
    textAlign: "center",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 18,
    color: "#111",
    opacity: 0.8,
    textAlign: "center",
    marginBottom: 26,
  },

  cta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    backgroundColor: PRIMARY_COLOR_BLUE,
    paddingVertical: 16,
    paddingHorizontal: 26,
    borderRadius: 14,
    minWidth: 220,
  },

  ctaText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});

export default styles;
