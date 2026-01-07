import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAFB",
    alignItems: "center",
    paddingTop: 60,
  },

  avatarWrapper: {
    position: "relative",
    width: 140,
    height: 140,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
  },

  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },

  cameraButton: {
    position: "absolute",
    bottom: 4,
    right: 4,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },

  name: {
    marginTop: 16,
    fontSize: 22,
    fontWeight: "600",
    color: "#111",
  },
});

export default styles;
