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
    marginTop: 20,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 14,
    borderRadius: 50,
    alignItems: "center",
    width: "100%",

    // shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonPressed: {
    opacity: 0.8,
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  separatorWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    marginTop: 25,
    marginBottom: 25,
  },

  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#BDBDBD",
  },

  separatorText: {
    marginHorizontal: 10,
    color: "#777",
    fontSize: 14,
  },
  googleBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    borderRadius: 50,
    width: "100%",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },

  googleIcon: {
    width: 35,
    height: 35,
    marginRight: 10,
  },

  googleText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
  },
  googleBtnPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },
  text: {
    fontSize: 14,
    color: "#000",
    marginLeft: 10,
  },
  link: {
    color: PRIMARY_COLOR,
    textDecorationLine: "underline",
  },
});

export default styles;
