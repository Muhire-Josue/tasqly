import React, { useState } from "react";
import { ScrollView, Text, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import BottomTabBar from "../../../components/BottomTabBar";
import Create from "../../../components/Create";
import { Ionicons } from "@expo/vector-icons";

const CreateTask: React.FC = () => {
  const [reset, setReset] = useState(false);
  const handleCancel = () => {
    setReset(true);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
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
          <Create reset={reset} />
        </ScrollView>
      </SafeAreaView>
      <BottomTabBar />
    </View>
  );
};

export default CreateTask;
