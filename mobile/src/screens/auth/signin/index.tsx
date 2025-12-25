import React, { useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { TextInput } from "react-native-paper";
import { useNavigateTo } from "../../../navigation/useNavigateTo";
import styles from "./styles";
import GoogleLogo from "../../../assets/google.png";
import { showMessage } from "react-native-flash-message";
import { validateSignInForm } from "../../../validators/signin";

const SignIn: React.FC = () => {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigateTo();

  const handleSignIn = (): void => {
    const errors = validateSignInForm(email, password);

    if (errors.length > 0) {
      showMessage({
        message: errors[0],
        type: "danger",
        icon: "danger",
      });
      return;
    }

    showMessage({
      message: "Signed in successfully",
      type: "success",
      icon: "success",
    });
    // hard reset
    setEmail("");
    setPassword("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>Hi! Welcome back 😊</Text>
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

        <Text style={styles.label}>Password</Text>

        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
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
          onPress={handleSignIn}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>

        <View style={styles.separatorWrapper}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>Or sign in with</Text>
          <View style={styles.separatorLine} />
        </View>

        <Pressable
          onPress={() => {}}
          style={({ pressed }) => [
            styles.googleBtn,
            pressed && styles.googleBtnPressed,
          ]}
        >
          <Image source={GoogleLogo} style={styles.googleIcon} />
          <Text style={styles.googleText}>Google</Text>
        </Pressable>

        <View style={styles.rowCenter}>
          <Text style={styles.text}>
            Don&apos;t have an account?{"  "}
            <Text
              style={styles.link}
              onPress={() => {
                navigateTo("signup");
              }}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
export default SignIn;
