import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "./styles";
import FontAwesome from "@expo/vector-icons/build/FontAwesome";
const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.subtitle}>Reset your password</Text>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          textContentType="emailAddress"
          placeholder="Enter your email"
          mode="outlined"
          outlineColor="#CCC9C9"
          activeOutlineColor="#CCC9C9"
          style={styles.input}
          contentStyle={styles.inputContent}
          underlineColor="transparent"
          activeUnderlineColor="transparent"
          left={<TextInput.Icon icon="email" />}
        />

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => {
            // TODO: send action
          }}
        >
          <FontAwesome name="send" size={22} color="#FFFFFF" />
          <Text style={styles.buttonText}>Send</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ResetPassword;
