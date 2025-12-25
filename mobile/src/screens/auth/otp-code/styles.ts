import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../../../theme/colors";

const styles = StyleSheet.create({
  container: {
    marginTop: "20%",
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
    textAlign: "center",
  },
  emailTitle: {
    fontSize: 16,
    color: PRIMARY_COLOR,
    marginBottom: 20,
    textAlign: "center",
  },
  otpWrapper: {
    marginTop: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },

  otpInput: {
    width: 80,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#D6D6D6",
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
  },
  resendWrapper: {
    marginTop: 24,
    alignItems: "center",
  },

  resendLabel: {
    fontSize: 14,
    color: "#9A9A9A",
    marginBottom: 4,
  },

  resendPressable: {},

  resendPressablePressed: {
    opacity: 0.7,
  },

  resendText: {
    fontSize: 15,
    color: PRIMARY_COLOR,
    textDecorationLine: "underline",
    fontWeight: "500",
  },

  verifyButton: {
    marginTop: 24,
    width: "100%",
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 50,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },

  verifyButtonPressed: {
    opacity: 0.85,
  },

  verifyButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  bottomTextWrapper: {
    marginTop: 24,
    alignItems: "center",
  },

  bottomText: {
    fontSize: 15,
    color: "#333333",
  },

  bottomLink: {
    color: PRIMARY_COLOR,
    textDecorationLine: "underline",
  },
});

export default styles;
