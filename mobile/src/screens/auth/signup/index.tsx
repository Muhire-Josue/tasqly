import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { TextInput } from "react-native-paper";

const SignUp: React.FC = () => {
  const [hidden, setHidden] = useState<boolean>(true);
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

        <Text style={styles.label}>Email</Text>
        <TextInput
          // value={value}
          // onChangeText={onChangeText}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          textContentType="emailAddress"
          placeholder="Ex: email@example.com"
          mode="outlined"
          outlineColor="#CCC9C9"
          activeOutlineColor="#CCC9C9"
          style={styles.input}
          contentStyle={styles.inputContent}
          underlineColor="transparent"
          activeUnderlineColor="transparent"
          left={<TextInput.Icon icon="email" />}
        />

        <Text style={styles.label}>Password</Text>

        <TextInput
          placeholder="Enter your password"
          mode="outlined"
          outlineColor="#CCC9C9"
          activeOutlineColor="#CCC9C9"
          style={styles.input}
          contentStyle={styles.inputContent}
          secureTextEntry={hidden}
          autoCapitalize="none"
          autoComplete="password"
          textContentType="password"
          left={<TextInput.Icon icon="lock" />}
          right={
            <TextInput.Icon
              icon={hidden ? "eye-off" : "eye"}
              onPress={() => setHidden(!hidden)}
            />
          }
        />
      </View>
    </View>
  );
};

export default SignUp;
