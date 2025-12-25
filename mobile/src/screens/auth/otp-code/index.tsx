import React, { useRef, useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./styles";

const OtpCode: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);

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
    </View>
  );
};

export default OtpCode;
