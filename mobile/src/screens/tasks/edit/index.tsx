import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, ScrollView, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../../../types/navigation";
import MOCK_TASKS from "../../../mocks/tasks";
import styles from "./styles";
import { useNavigateTo } from "../../../navigation/useNavigateTo";
import BottomTabBar from "../../../components/BottomTabBar";
import { Ionicons } from "@expo/vector-icons";
import Edit from "../../../components/Edit";

type TaskDetailsRoute = RouteProp<RootStackParamList, "edit-task">;

const EditTask: React.FC = () => {
  const navigateTo = useNavigateTo();

  const route = useRoute<TaskDetailsRoute>();
  const { header, taskId } = route.params;

  const task = MOCK_TASKS.find((t) => t.id === taskId);
  const [reset, setReset] = useState(false);

  const TAB_BAR_HEIGHT = 32;

  const handleCancel = () => {
    setReset(true);
    navigateTo("task-list");
  };

  return (
    <>
      <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: TAB_BAR_HEIGHT,
            }}
          >
            <View style={styles.container}>
              <View style={styles.headerRow}>
                <Text style={styles.title}>{header}</Text>

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
              <Edit task={task} reset={reset} />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
      <BottomTabBar activeTab={"tasks"} />
    </>
  );
};

export default EditTask;
