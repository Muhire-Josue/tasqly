import React, { useState } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import styles from "./styles";
import Stats from "../../../components/common/Stats";
import HeaderInfo from "../../../components/common/HeaderInfo";
import { PRIMARY_COLOR } from "../../../theme/colors";

const TaskList: React.FC = () => {
  const [menuTop, setMenuTop] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | "mine">("all");
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([
    "Pending",
    "Completed",
    "Rejected",
  ]);

  const toggleFilter = (value: string) => {
    setSelectedFilters((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  return (
    <View style={styles.container}>
      <HeaderInfo />
      <Stats />
      <View
        style={styles.filterRow}
        onLayout={(e) => {
          const { y, height } = e.nativeEvent.layout;
          setMenuTop(y + height + 8); // 8px gap below the row
        }}
      >
        <View style={styles.filterChips}>
          <Pressable
            onPress={() => setActiveFilter("all")}
            style={({ pressed }) => [
              styles.filterChip,
              activeFilter === "all" && styles.filterChipActive,
              pressed && styles.filterChipPressed,
            ]}
          >
            <Text
              style={[
                styles.filterChipText,
                activeFilter === "all" && styles.filterChipTextActive,
              ]}
            >
              All
            </Text>
          </Pressable>

          <Pressable
            onPress={() => setActiveFilter("mine")}
            style={({ pressed }) => [
              styles.filterChip,
              activeFilter === "mine" && styles.filterChipActive,
              pressed && styles.filterChipPressed,
            ]}
          >
            <Text
              style={[
                styles.filterChipText,
                activeFilter === "mine" && styles.filterChipTextActive,
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
          onPress={() => setShowFilterMenu((p) => !p)}
        >
          <Feather name="filter" size={28} color="#000" />
        </Pressable>
      </View>
      {showFilterMenu && menuTop !== null && (
        <View style={styles.overlay}>
          {/* transparent backdrop to close on outside tap */}
          <Pressable
            style={StyleSheet.absoluteFill}
            onPress={() => setShowFilterMenu(false)}
          />

          {/* actual dropdown */}
          <View style={[styles.dropdown, { top: menuTop }]}>
            {["Pending", "Completed", "Rejected"].map((item) => (
              <View key={item} style={styles.optionRow}>
                <Checkbox
                  value={selectedFilters.includes(item)}
                  onValueChange={() => toggleFilter(item)}
                  color={PRIMARY_COLOR}
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

export default TaskList;
