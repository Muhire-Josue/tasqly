import React, { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import Checkbox from "expo-checkbox";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { PRIMARY_COLOR_BLUE } from "../../../theme/colors";
import BottomTabBar from "../../../components/common/BottomTabBar";
import { TaskStatus } from "../../../types/tasks";

const CreateTaskScreen: React.FC = () => {
  const STATUS_META: Record<
    TaskStatus,
    { label: string; icon: keyof typeof Ionicons.glyphMap; color: string }
  > = {
    Pending: {
      label: "Pending",
      icon: "time-outline",
      color: "#F4A11A",
    },
    Completed: {
      label: "Completed",
      icon: "checkmark-circle-outline",
      color: "#3CCB79",
    },
    Rejected: {
      label: "Rejected",
      icon: "close-circle-outline",
      color: "#D62828",
    },
  };

  const [title, setTitle] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);

  const [status, setStatus] = useState<TaskStatus>("Pending");
  const [showStatusMenu, setShowStatusMenu] = useState(false);
  const handleCancel = () => {
    // navigate back or close modal
    // navigation.goBack();
  };

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
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
          <View style={styles.formSection}>
            <Text style={styles.label}>Title</Text>
            <TextInput
              value={title}
              onChangeText={setTitle}
              placeholder="Ex: Groceries"
              placeholderTextColor="#A0A0A0"
              style={styles.textInput}
            />

            <View style={styles.urgentRow}>
              <Checkbox
                value={isUrgent}
                onValueChange={setIsUrgent}
                color={isUrgent ? PRIMARY_COLOR_BLUE : undefined}
              />
              <Text style={styles.urgentLabel}>This Task Is Urgent</Text>
            </View>
            <View style={styles.statusDropdownWrapper}>
              <Pressable
                style={styles.statusSelector}
                onPress={() => setShowStatusMenu((prev) => !prev)}
              >
                {/* left chevron icon */}
                <Ionicons name="chevron-down" size={22} color="#000" />
                <Text style={styles.statusSelectorText}>
                  {STATUS_META[status].label}
                </Text>
              </Pressable>

              {showStatusMenu && (
                <View style={styles.statusDropdownMenu}>
                  {(Object.keys(STATUS_META) as TaskStatus[]).map((option) => (
                    <Pressable
                      key={option}
                      style={styles.statusOptionRow}
                      onPress={() => {
                        setStatus(option);
                        setShowStatusMenu(false);
                      }}
                    >
                      <Text style={styles.statusOptionText}>
                        {STATUS_META[option].label}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              )}
            </View>
          </View>
        </View>
      </SafeAreaView>
      <BottomTabBar />
    </>
  );
};

export default CreateTaskScreen;
