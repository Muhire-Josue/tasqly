import React, { useState } from "react";
import { View, Text, Pressable, TextInput, Modal } from "react-native";
import Checkbox from "expo-checkbox";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { SafeAreaView } from "react-native-safe-area-context";
import { Calendar } from "react-native-calendars";
import styles from "./styles";
import {
  PRIMARY_COLOR_BLUE,
  PRIMARY_COLOR_GREEN,
  PRIMARY_COLOR_RED,
  PRIMARY_COLOR_YELLOW,
} from "../../../theme/colors";
import BottomTabBar from "../../../components/common/BottomTabBar";
import { TaskStatus } from "../../../types/tasks";
import { useNavigateTo } from "../../../navigation/useNavigateTo";

const CreateTask: React.FC = () => {
  const navigate = useNavigateTo();
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

  type Frequency = "None" | "Daily" | "Weekly" | "Bi-weekly" | "Monthly";

  const FREQUENCIES: Frequency[] = [
    "None",
    "Daily",
    "Weekly",
    "Bi-weekly",
    "Monthly",
  ];

  const [frequency, setFrequency] = useState<Frequency>("None");
  const [showFrequencyMenu, setShowFrequencyMenu] = useState(false);

  const [title, setTitle] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);

  const [status, setStatus] = useState<TaskStatus>("Pending");
  const [showStatusMenu, setShowStatusMenu] = useState(false);
  const [dueDate, setDueDate] = useState<string | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const handlePickDate = () => {
    setShowCalendar(true);
  };

  const formatDueDateLabel = (isoDate: string): string => {
    const [year, month, day] = isoDate.split("-").map(Number);
    const date = new Date(year, month - 1, day);

    const d = date.getDate();
    const monthName = date.toLocaleString("en-US", { month: "long" });
    const y = date.getFullYear();

    const suffix =
      d >= 11 && d <= 13
        ? "th"
        : d % 10 === 1
          ? "st"
          : d % 10 === 2
            ? "nd"
            : d % 10 === 3
              ? "rd"
              : "th";

    return `${d}${suffix} ${monthName} ${y}`;
  };

  const handleCancel = () => {
    navigate("task-list");
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
            {/* Header row just for the "Frequency" label on the right */}
            <View style={styles.dateHeaderRow}>
              <View style={{ flex: 1 }} />
              <Text style={styles.frequencyLabel}>Frequency</Text>
            </View>

            {/* Pick date (left) + Frequency dropdown (right) */}
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

              <View style={styles.frequencyWrapper}>
                <View style={styles.frequencyDropdownWrapper}>
                  <Pressable
                    style={styles.frequencySelector}
                    onPress={() => setShowFrequencyMenu((prev) => !prev)}
                  >
                    <Ionicons name="chevron-down" size={20} color="#000" />
                    <Text style={styles.frequencySelectorText}>
                      {frequency}
                    </Text>
                  </Pressable>

                  {showFrequencyMenu && (
                    <View style={styles.frequencyDropdownMenu}>
                      {FREQUENCIES.map((option) => (
                        <Pressable
                          key={option}
                          style={styles.frequencyOptionRow}
                          onPress={() => {
                            setFrequency(option);
                            setShowFrequencyMenu(false);
                          }}
                        >
                          <Text style={styles.frequencyOptionText}>
                            {option}
                          </Text>
                        </Pressable>
                      ))}
                    </View>
                  )}
                </View>
              </View>
            </View>

            <View style={styles.dueDateRow}>
              <Text style={styles.dueDateLabel}>Due Date:</Text>
              <Text style={styles.dueDateValue}>
                {dueDate ? formatDueDateLabel(dueDate) : "—"}
              </Text>
            </View>
            <Modal
              visible={showCalendar}
              transparent
              animationType="fade"
              onRequestClose={() => setShowCalendar(false)}
            >
              <View style={styles.calendarOverlay}>
                <View style={styles.calendarCard}>
                  <Calendar
                    onDayPress={(day) => {
                      setDueDate(day.dateString);
                      setShowCalendar(false);
                    }}
                    markedDates={
                      dueDate
                        ? {
                            [dueDate]: {
                              selected: true,
                              selectedColor: PRIMARY_COLOR_BLUE,
                              selectedTextColor: "#FFFFFF",
                            },
                          }
                        : undefined
                    }
                  />

                  <Pressable
                    style={styles.calendarCloseButton}
                    onPress={() => setShowCalendar(false)}
                  >
                    <Text style={styles.calendarCloseText}>Close</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </SafeAreaView>
      <BottomTabBar />
    </>
  );
};

export default CreateTask;
