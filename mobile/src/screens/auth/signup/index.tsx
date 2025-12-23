import { View, Text } from "react-native";
import styles from "./styles";

const SignUp: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>
        Fill your information bellow or register with your social account.
      </Text>
    </View>
  );
};

export default SignUp;
