/* eslint-disable complexity */
import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Checkbox from "expo-checkbox";
import { RootStackParamList } from "../../../types/navigation";
import MOCK_TASKS from "../../../mocks/tasks";
import styles from "./styles";
import { useNavigateTo } from "../../../navigation/useNavigateTo";
import { PRIMARY_COLOR_BLUE } from "../../../theme/colors";
import BottomTabBar from "../../../components/common/BottomTabBar";
import { TaskStatus } from "../../../types/tasks";
import { STATUS_META } from "../../../mocks/statusMeta";

type TaskDetailsRoute = RouteProp<RootStackParamList, "edit-task">;

const EditTask: React.FC = () => {
  const navigateTo = useNavigateTo();

  const route = useRoute<TaskDetailsRoute>();
  const { header, taskId } = route.params;

  const task = MOCK_TASKS.find((t) => t.id === taskId);

  const [title, setTitle] = useState<string | null>(
    task?.title ?? "Task not found",
  );
  const [isUrgent, setIsUrgent] = useState<boolean | null>(
    task?.urgent ?? false,
  );

  const [status, setStatus] = useState<TaskStatus | null>(
    task?.status ?? "Pending",
  );
  const [showStatusMenu, setShowStatusMenu] = useState(false);
  // const [dueDate, setDueDate] = useState<string | null>(null);
  // const [showCalendar, setShowCalendar] = useState(false);
  // const [selectedAssignee, setSelectedAssignee] = useState<Member | null>(null);
  // const [assigneeRotationEnabled, setAssigneeRotationEnabled] = useState(false);
  // const [showAssigneeModal, setShowAssigneeModal] = useState(false);
  // const [description, setDescription] = useState("");

  const handleCancel = () => {
    navigateTo("task-list");
    setTitle(null);
    setIsUrgent(false);
    setStatus("Pending");
    // setDueDate(null);
    // setSelectedAssignee(null);
  };

  return (
    <>
      <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
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
          <View style={styles.formSection}>
            <Text style={styles.label}>Title</Text>
            <TextInput
              value={title ? title : ""}
              onChangeText={setTitle}
              placeholder="Ex: Groceries"
              placeholderTextColor="#A0A0A0"
              style={styles.textInput}
            />

            <View style={styles.urgentRow}>
              <Checkbox
                value={isUrgent ?? false}
                onValueChange={setIsUrgent}
                color={isUrgent ? PRIMARY_COLOR_BLUE : undefined}
              />
              <Text style={styles.urgentLabel}>This Task Is Urgent</Text>
            </View>

            <View style={styles.statusRow}>
              <View style={styles.statusDropdownWrapper}>
                <Pressable
                  style={styles.statusSelector}
                  onPress={() => setShowStatusMenu((prev) => !prev)}
                >
                  <Ionicons name="chevron-down" size={22} color="#000" />
                  <Text style={styles.statusSelectorText}>
                    {STATUS_META[status ?? "Pending"].label}
                  </Text>
                </Pressable>

                {showStatusMenu && (
                  <View style={styles.statusDropdownMenu}>
                    {(Object.keys(STATUS_META) as TaskStatus[]).map(
                      (option) => (
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
                      ),
                    )}
                  </View>
                )}
              </View>

              <View style={{ flex: 1 }} />
            </View>
            <View style={styles.statusFrequencyHeaderRow}>
              <View style={styles.statusSummaryLeft}>
                <Text style={styles.statusSummaryLabel}>Status:</Text>
                <View style={styles.statusSummaryValue}>
                  <Ionicons
                    name={STATUS_META[status ?? "Pending"].icon}
                    size={18}
                    color={STATUS_META[status ?? "Pending"].color}
                    style={{ marginRight: 6 }}
                  />
                  <Text style={styles.statusSummaryText}>
                    {STATUS_META[status ?? "Pending"].label}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <BottomTabBar />
    </>
  );
};

export default EditTask;
