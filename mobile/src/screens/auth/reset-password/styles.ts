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
    marginBottom: 20,
    textAlign: "center",
  },
  wrapper: {
    marginTop: "15%",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginBottom: 16,
  },
  inputContent: {
    paddingVertical: 6,
    height: 48,
  },
  button: {
    marginTop: 24,
    width: "100%",
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 50,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonPressed: {
    opacity: 0.8,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
  bottomTextWrapper: {
    marginTop: 22,
    alignItems: "center",
  },

  bottomText: {
    fontSize: 15,
    color: "#333",
  },

  bottomLink: {
    color: PRIMARY_COLOR,
    textDecorationLine: "underline",
    // fontWeight: "500",
  },
});

export default styles;
