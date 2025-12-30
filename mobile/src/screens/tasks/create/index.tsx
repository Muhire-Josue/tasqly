import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

const CreateTaskScreen: React.FC = () => {
  const handleCancel = () => {
    // navigate back or close modal
    // navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.headerRow}>
          <Text style={styles.title}>Create a Task</Text>

          <Pressable
            style={({ pressed }) => [
              styles.cancelButton,
              pressed && { opacity: 0.9 },
            ]}
            onPress={handleCancel}
          >
            <Ionicons
              name="close-circle-outline"
              size={30}
              color="#FFFFFF"
              style={{ marginRight: 6 }}
            />
            <Text style={styles.cancelText}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateTaskScreen;
