import { View, Text } from "react-native";
import styles from "./styles";
import { TextInput } from "react-native-paper";

const SignUp: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>
        Fill your information bellow or register with your social account.
      </Text>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          // value={value}
          // onChangeText={onChangeText}
          placeholder="Ex: John Doe"
          mode="outlined"
          outlineColor="#CCC9C9"
          activeOutlineColor="#CCC9C9"
          style={styles.input}
          contentStyle={styles.inputContent}
          underlineColor="transparent"
          activeUnderlineColor="transparent"
          left={<TextInput.Icon icon="account" />}
        />
      </View>
    </View>
  );
};

export default SignUp;
