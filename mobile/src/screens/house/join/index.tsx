import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { showMessage } from "react-native-flash-message";

import styles from "./style";

type Props = {
  onJoinSuccess?: (householdId: string) => void;
};

const JoinHouse: React.FC<Props> = ({ onJoinSuccess }) => {
  const [inviteLink, setInviteLink] = useState("");
  const [loading, setLoading] = useState(false);

  const handleJoin = async () => {
    if (!inviteLink.trim()) {
      showMessage({
        message: "Please enter an invite link",
        type: "danger",
        icon: "danger",
      });
      return;
    }

    try {
      setLoading(true);

      // TODO: replace with real backend call

      await new Promise((res) => setTimeout(res, 1000));

      showMessage({
        message: "Successfully joined household 🎉",
        type: "success",
        icon: "success",
      });

      onJoinSuccess?.("mock-house-id");
    } catch {
      showMessage({
        message: "Invalid or expired invite link",
        type: "danger",
        icon: "danger",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.joinSafe} edges={["top", "left", "right"]}>
      <KeyboardAvoidingView
        style={styles.joinRoot}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* Title */}
        <Text style={styles.joinTitle}>Join Household</Text>

        {/* Input */}
        <View style={styles.joinInputWrapper}>
          <Ionicons name="home-outline" size={22} color="#111" />
          <TextInput
            value={inviteLink}
            onChangeText={setInviteLink}
            placeholder="Ex: tasqly.io/invite/K7P3L"
            placeholderTextColor="#9CA3AF"
            style={styles.joinInput}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        {/* Join button */}
        <Pressable
          onPress={handleJoin}
          disabled={loading}
          style={({ pressed }) => [
            styles.joinButton,
            pressed && { opacity: 0.9 },
            loading && { opacity: 0.6 },
          ]}
        >
          <MaterialCommunityIcons name="account-group" size={22} color="#FFF" />
          <Text style={styles.joinButtonText}>
            {loading ? "Joining..." : "Join"}
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default JoinHouse;
