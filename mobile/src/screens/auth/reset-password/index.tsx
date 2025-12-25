import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import { useNavigateTo } from "../../../navigation/useNavigateTo";
import styles from "./styles";
import FontAwesome from "@expo/vector-icons/build/FontAwesome";
import { validateResetPasswordForm } from "../../../validators/reset-password";
import { showMessage } from "react-native-flash-message";
const ResetPassword: React.FC = () => {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const navigateTo = useNavigateTo();

  const handleResetPassword = (): void => {
    const errors = validateResetPasswordForm(
      email,
      newPassword,
      confirmNewPassword,
    );

    if (errors.length > 0) {
      showMessage({
        message: errors[0],
        type: "danger",
        icon: "danger",
      });
      return;
    }

    showMessage({
      message: "Password reset successfully",
      type: "success",
      icon: "success",
    });
    // hard reset
    setEmail("");
    setNewPassword("");
    setConfirmNewPassword("");
  };

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

        <Text style={styles.label}>New Password</Text>

        <TextInput
          value={newPassword}
          onChangeText={setNewPassword}
          placeholder="Enter your new password"
          mode="outlined"
          outlineColor="#CCC9C9"
          activeOutlineColor="#CCC9C9"
          style={styles.input}
          contentStyle={styles.inputContent}
          secureTextEntry={hiddenPassword}
          autoCapitalize="none"
          autoComplete="password"
          textContentType="password"
          left={<TextInput.Icon icon="lock" />}
          right={
            <TextInput.Icon
              icon={hiddenPassword ? "eye-off" : "eye"}
              onPress={() => setHiddenPassword(!hiddenPassword)}
            />
          }
        />

        <Text style={styles.label}>Confirm New Password</Text>

        <TextInput
          value={confirmNewPassword}
          onChangeText={setConfirmNewPassword}
          placeholder="Confirm your new password"
          mode="outlined"
          outlineColor="#CCC9C9"
          activeOutlineColor="#CCC9C9"
          style={styles.input}
          contentStyle={styles.inputContent}
          secureTextEntry={hiddenPassword}
          autoCapitalize="none"
          autoComplete="password"
          textContentType="password"
          left={<TextInput.Icon icon="lock" />}
          right={
            <TextInput.Icon
              icon={hiddenPassword ? "eye-off" : "eye"}
              onPress={() => setHiddenPassword(!hiddenPassword)}
            />
          }
        />

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleResetPassword}
        >
          <FontAwesome name="send" size={22} color="#FFFFFF" />
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>

        <View style={styles.bottomTextWrapper}>
          <Text style={styles.bottomText}>
            Already have an account?{" "}
            <Text
              style={styles.bottomLink}
              onPress={() => {
                navigateTo("signin");
              }}
            >
              Sign in
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ResetPassword;
