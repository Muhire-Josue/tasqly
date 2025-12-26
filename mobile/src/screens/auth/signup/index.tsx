import React, { useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import Checkbox from "expo-checkbox";
import { showMessage } from "react-native-flash-message";
import styles from "./styles";
import { TextInput } from "react-native-paper";
import { PRIMARY_COLOR_BLUE } from "../../../theme/colors";
import GoogleLogo from "../../../assets/google.png";
import { validateSignUpForm } from "../../../validators/signup";
import { useNavigateTo } from "../../../navigation/useNavigateTo";

const SignUp: React.FC = () => {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [hiddenConfirmPassword, setHiddenConfirmPassword] =
    useState<boolean>(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const navigateTo = useNavigateTo();

  const handleSignUp = (): void => {
    const errors = validateSignUpForm(
      name,
      email,
      password,
      confirmPassword,
      agreed,
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
      message: "Account created successfully",
      type: "success",
      icon: "success",
    });
    // hard reset
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setAgreed(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>
        Fill your information bellow or register with your google account.
      </Text>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter your full name"
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

        <Text style={styles.label}>Confirm Password</Text>

        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm your password"
          mode="outlined"
          outlineColor="#CCC9C9"
          activeOutlineColor="#CCC9C9"
          style={styles.input}
          contentStyle={styles.inputContent}
          secureTextEntry={hiddenConfirmPassword}
          autoCapitalize="none"
          autoComplete="password"
          textContentType="password"
          left={<TextInput.Icon icon="lock" />}
          right={
            <TextInput.Icon
              icon={hiddenConfirmPassword ? "eye-off" : "eye"}
              onPress={() => setHiddenConfirmPassword(!hiddenConfirmPassword)}
            />
          }
        />

        <Pressable
          style={styles.row}
          onPress={() => setAgreed((prev) => !prev)}
        >
          <Checkbox
            value={agreed}
            onValueChange={setAgreed}
            color={agreed ? PRIMARY_COLOR_BLUE : undefined}
          />

          <Text style={styles.text}>
            Agree with{" "}
            <Text
              style={styles.link}
              onPress={() => {
                // open terms screen
              }}
            >
              Terms & Conditions
            </Text>
          </Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleSignUp}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>

        <View style={styles.separatorWrapper}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>Or sign up with</Text>
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
            Already have an account?{" "}
            <Text
              style={styles.link}
              onPress={() => {
                navigateTo("signin");
              }}
            >
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
