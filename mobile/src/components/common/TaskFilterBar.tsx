// src/components/common/TaskFilterBar.tsx
import React, { useRef, useState } from "react";
import { View, Text, Pressable, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Calendar } from "react-native-calendars";
import styles from "../style/taskFilterBar";
import { TaskStatus } from "../../types/tasks";

export type Scope = "all" | "mine";

export interface TaskFilterBarProps {
  scope: Scope;
  onScopeChange: (scope: Scope) => void;
  selectedStatuses: TaskStatus[];
  onToggleStatus: (status: TaskStatus) => void;
  // used by the parent to position the status dropdown
  onFilterIconMeasured: (pageY: number, height: number) => void;
}

const TaskFilterBar: React.FC<TaskFilterBarProps> = ({
  scope,
  onScopeChange,
  onFilterIconMeasured,
}) => {
  const iconRef = useRef<View>(null);

  // calendar state (YYYY-MM-DD strings)
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  const handleFilterPress = () => {
    iconRef.current?.measureInWindow((_x, y, _w, h) => {
      onFilterIconMeasured(y, h);
    });
  };

  const openCalendar = () => setCalendarVisible(true);
  const closeCalendar = () => setCalendarVisible(false);

  const handleResetDates = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const handleDayPress = (day: { dateString: string }) => {
    const date = day.dateString;

    // 1) first tap or re-starting a range
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
      return;
    }

    // 2) second tap – finish the range (ensure end >= start)
    if (startDate && !endDate) {
      if (date < startDate) {
        setEndDate(startDate);
        setStartDate(date);
      } else {
        setEndDate(date);
      }
    }
  };

  // build marked dates for react-native-calendars
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markedDates: Record<string, any> = {};
  if (startDate) {
    markedDates[startDate] = {
      startingDay: true,
      color: "#007AFF",
      textColor: "#FFFFFF",
    };
  }
  if (endDate) {
    markedDates[endDate] = {
      endingDay: true,
      color: "#007AFF",
      textColor: "#FFFFFF",
    };

    // fill intermediate days
    const current = new Date(startDate!);
    const end = new Date(endDate);
    current.setDate(current.getDate() + 1);

    while (current < end) {
      const ds = current.toISOString().slice(0, 10);
      markedDates[ds] = {
        color: "#B3D7FF",
        textColor: "#000000",
      };
      current.setDate(current.getDate() + 1);
    }
  }

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.filterRow}>
          <View style={styles.filterChips}>
            <Pressable
              onPress={() => onScopeChange("all")}
              style={[
                styles.filterChip,
                scope === "all" && styles.filterChipActive,
              ]}
            >
              <Text
                style={[
                  styles.filterChipText,
                  scope === "all" && styles.filterChipTextActive,
                ]}
              >
                All
              </Text>
            </Pressable>

            <Pressable
              onPress={() => onScopeChange("mine")}
              style={[
                styles.filterChip,
                scope === "mine" && styles.filterChipActive,
              ]}
            >
              <Text
                style={[
                  styles.filterChipText,
                  scope === "mine" && styles.filterChipTextActive,
                ]}
              >
                For Me
              </Text>
            </Pressable>

            <Pressable style={styles.filterIcon} onPress={openCalendar}>
              <FontAwesome5 name="calendar-alt" size={24} color="#000" />
            </Pressable>
          </View>

          <View style={styles.rightIconsRow}>
            <View ref={iconRef}>
              <Pressable style={styles.filterIcon} onPress={handleFilterPress}>
                <Ionicons name="filter-outline" size={30} color="#000" />
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      {/* calendar modal */}
      <Modal
        visible={calendarVisible}
        transparent
        animationType="fade"
        onRequestClose={closeCalendar}
      >
        <Pressable style={styles.calendarBackdrop} onPress={closeCalendar}>
          <Pressable
            style={styles.calendarCard}
            // stop propagation so taps inside the card don't close the modal
            onPress={(e) => e.stopPropagation()}
          >
            <Calendar
              onDayPress={handleDayPress}
              markingType="period"
              markedDates={markedDates}
            />

            <View style={styles.calendarActions}>
              <Pressable onPress={handleResetDates}>
                <Text style={styles.calendarActionText}>Reset</Text>
              </Pressable>
              <Pressable onPress={closeCalendar}>
                <Text style={[styles.calendarActionText, { marginLeft: 16 }]}>
                  Done
                </Text>
              </Pressable>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
};

export default TaskFilterBar;
