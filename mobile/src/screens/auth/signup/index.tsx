import React, { useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import Checkbox from "expo-checkbox";
import styles from "./styles";
import { TextInput } from "react-native-paper";
import { PRIMARY_COLOR } from "../../../theme/colors";
import GoogleLogo from "../../../assets/google.png";

const SignUp: React.FC = () => {
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);
  const [hiddenConfirmPassword, setHiddenConfirmPassword] =
    useState<boolean>(true);
  const [agreed, setAgreed] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>
        Fill your information bellow or register with your google account.
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
            onValueChange={() => setAgreed((p) => !p)}
            color={agreed ? PRIMARY_COLOR : undefined}
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
          onPress={() => {}}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>

        <View style={styles.separatorWrapper}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>Or sign up with</Text>
          <View style={styles.separatorLine} />
        </View>
        <Pressable style={styles.googleBtn} onPress={() => {}}>
          <Image source={GoogleLogo} style={styles.googleIcon} />
          <Text style={styles.googleText}>Google</Text>
        </Pressable>
        <View style={styles.rowCenter}>
          <Text style={styles.text}>
            Already have an account?{" "}
            <Text
              style={styles.link}
              onPress={() => {
                // open sign in screen
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
