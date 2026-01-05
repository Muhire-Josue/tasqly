import React, { useState } from "react";
import { ScrollView, Text, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import BottomTabBar from "../../../components/BottomTabBar";
import Create from "../../../components/Create";
import { Ionicons } from "@expo/vector-icons";
import { useNavigateTo } from "../../../navigation/useNavigateTo";

const TAB_BAR_HEIGHT = 64; // adjust to your BottomTabBar height

const CreateTask: React.FC = () => {
  const navigate = useNavigateTo();
  const [reset, setReset] = useState(false);

  const handleCancel = () => {
    navigate("task-list");
    setReset(true);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingTop: 16,
            paddingBottom: TAB_BAR_HEIGHT + 24,
          }}
          showsVerticalScrollIndicator={false}
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

        <View style={styles.bottomTab}>
          <BottomTabBar />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateTask;
