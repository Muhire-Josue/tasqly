import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import Checkbox from "expo-checkbox";
import { Ionicons } from "@expo/vector-icons";
import styles from "../style/taskFilterBar";
import { PRIMARY_COLOR_BLUE } from "../../theme/colors";

type Scope = "all" | "mine";
type Status = "Pending" | "Completed" | "Rejected";

const STATUSES: Status[] = ["Pending", "Completed", "Rejected"];

interface TaskFilterBarProps {
  style?: StyleProp<ViewStyle>;
}

const TaskFilterBar: React.FC<TaskFilterBarProps> = ({ style }) => {
  const [scope, setScope] = useState<Scope>("all");
  const [showMenu, setShowMenu] = useState(false);
  const [menuTop, setMenuTop] = useState<number | null>(null);
  const [selectedStatuses, setSelectedStatuses] = useState<Status[]>([
    "Pending",
    "Completed",
    "Rejected",
  ]);

  const toggleStatus = (value: Status) => {
    setSelectedStatuses((prev) =>
      prev.includes(value)
        ? (prev.filter((s) => s !== value) as Status[])
        : [...prev, value],
    );
  };

  return (
    <View style={[styles.wrapper, style]}>
      {/* Row with chips + icon (we measure this to know where to place dropdown) */}
      <View
        style={styles.filterRow}
        onLayout={(e) => {
          const { y, height } = e.nativeEvent.layout;
          // dropdown just below the row
          setMenuTop(y + height + 8);
        }}
      >
        <View style={styles.filterChips}>
          <Pressable
            onPress={() => setScope("all")}
            style={({ pressed }) => [
              styles.filterChip,
              scope === "all" && styles.filterChipActive,
              pressed && styles.filterChipPressed,
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
            onPress={() => setScope("mine")}
            style={({ pressed }) => [
              styles.filterChip,
              scope === "mine" && styles.filterChipActive,
              pressed && styles.filterChipPressed,
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
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.filterIcon,
            pressed && { opacity: 0.6 },
          ]}
          onPress={() => setShowMenu((p) => !p)}
        >
          <Ionicons name="filter-outline" size={30} color="#000" />
        </Pressable>
      </View>

      {/* Overlay + dropdown */}
      {showMenu && menuTop !== null && (
        <View style={styles.overlay}>
          {/* Backdrop — tap outside dropdown to close */}
          <Pressable
            style={StyleSheet.absoluteFill}
            onPress={() => setShowMenu(false)}
          />

          <View style={[styles.dropdown, { top: menuTop }]}>
            {STATUSES.map((item) => (
              <View key={item} style={styles.optionRow}>
                <Checkbox
                  value={selectedStatuses.includes(item)}
                  onValueChange={() => toggleStatus(item)}
                  color={PRIMARY_COLOR_BLUE}
                />
                <Text style={styles.optionText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default TaskFilterBar;
