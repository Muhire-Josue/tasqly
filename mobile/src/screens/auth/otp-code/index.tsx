import React, { useRef, useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./styles";
import { useNavigateTo } from "../../../navigation/useNavigateTo";

const OtpCode: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);

  const navigateTo = useNavigateTo();

  const inputs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next
    if (value && index < 3) {
      inputs[index + 1].current?.focus();
    }

    // Move back if empty
    if (!value && index > 0) {
      inputs[index - 1].current?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Code</Text>
      <Text style={styles.subtitle}>Enter the code sent to your email</Text>
      <Text style={styles.emailTitle}>email@example.com</Text>
      <View style={styles.otpWrapper}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            placeholder="-"
            ref={inputs[index]}
            value={digit}
            onChangeText={(value) =>
              handleChange(value.replace(/\D/, ""), index)
            }
            keyboardType="number-pad"
            maxLength={1}
            style={styles.otpInput}
            textAlign="center"
          />
        ))}
      </View>
      <View style={styles.resendWrapper}>
        <Text style={styles.resendLabel}>Didn&apos;t receive the code?</Text>
        <Pressable style={styles.resendPressable}>
          <Text style={styles.resendText}>Resend Code</Text>
        </Pressable>
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.verifyButton,
          pressed && styles.verifyButtonPressed,
        ]}
        onPress={() => {
          // TODO: verify OTP using otp.join("")
        }}
      >
        <Text style={styles.verifyButtonText}>Verify</Text>
      </Pressable>

      {/* ===== Already have an account? Sign in ===== */}
      <View style={styles.bottomTextWrapper}>
        <Text style={styles.bottomText}>
          Already have an account?{" "}
          <Text
            style={styles.bottomLink}
            onPress={() => {
              // TODO: navigate to Sign In
              navigateTo("signin");
            }}
          >
            Sign in
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default OtpCode;
