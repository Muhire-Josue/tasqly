import React, { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import Checkbox from "expo-checkbox";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { SafeAreaView } from "react-native-safe-area-context";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import styles from "./styles";
import {
  PRIMARY_COLOR_BLUE,
  PRIMARY_COLOR_GREEN,
  PRIMARY_COLOR_RED,
  PRIMARY_COLOR_YELLOW,
} from "../../../theme/colors";
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
      color: PRIMARY_COLOR_YELLOW,
    },
    Completed: {
      label: "Completed",
      icon: "checkmark-circle-outline",
      color: PRIMARY_COLOR_GREEN,
    },
    Rejected: {
      label: "Rejected",
      icon: "close-circle-outline",
      color: PRIMARY_COLOR_RED,
    },
  };

  const [title, setTitle] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);

  const [status, setStatus] = useState<TaskStatus>("Pending");
  const [showStatusMenu, setShowStatusMenu] = useState(false);
  const [dueDate, setDueDate] = useState<Date | null>(null);

  const formatDueDate = (date: Date) => {
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    const getSuffix = (d: number) => {
      if (d >= 11 && d <= 13) return "th";
      switch (d % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    return `${day}${getSuffix(day)} ${month} ${year}`;
  };

  const handlePickDate = () => {
    DateTimePickerAndroid.open({
      value: dueDate ?? new Date(),
      mode: "date",
      is24Hour: false,
      onChange: (_event, selectedDate) => {
        if (selectedDate) {
          setDueDate(selectedDate);
        }
      },
    });
  };
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

            <View style={styles.statusRow}>
              <View style={styles.statusDropdownWrapper}>
                <Pressable
                  style={styles.statusSelector}
                  onPress={() => setShowStatusMenu((prev) => !prev)}
                >
                  <Ionicons name="chevron-down" size={22} color="#000" />
                  <Text style={styles.statusSelectorText}>
                    {STATUS_META[status].label}
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

            <View style={styles.statusSummaryRow}>
              <Text style={styles.statusSummaryLabel}>Status:</Text>
              <View style={styles.statusSummaryValue}>
                <Ionicons
                  name={STATUS_META[status].icon}
                  size={18}
                  color={STATUS_META[status].color}
                  style={{ marginRight: 6 }}
                />
                <Text style={styles.statusSummaryText}>
                  {STATUS_META[status].label}
                </Text>
              </View>
            </View>
            <View style={styles.dateRow}>
              <View style={styles.dateButtonWrapper}>
                <Pressable style={styles.dateButton} onPress={handlePickDate}>
                  <FontAwesome5
                    name="calendar-alt"
                    size={20}
                    color="#FFFFFF"
                    style={{ marginRight: 8 }}
                  />
                  <Text style={styles.dateButtonText}>Pick a Date</Text>
                </Pressable>
              </View>

              <View style={{ flex: 1 }} />
            </View>

            <View style={styles.dueDateRow}>
              <Text style={styles.dueDateLabel}>Due Date:</Text>
              <Text style={styles.dueDateValue}>
                {dueDate ? formatDueDate(dueDate) : "—"}
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <BottomTabBar />
    </>
  );
};

export default CreateTaskScreen;
