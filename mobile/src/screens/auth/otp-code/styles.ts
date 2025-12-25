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
});

export default styles;
