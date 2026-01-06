import React, { useMemo, useState } from "react";
import { Modal, Pressable, Text, View, StyleSheet } from "react-native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import BottomTabBar from "../../components/BottomTabBar";
import Checkbox from "expo-checkbox";
import { PRIMARY_COLOR_BLUE } from "../../theme/colors";

type NotificationFilter = "All" | "Mentions";

const Notification: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuTop, setMenuTop] = useState<number | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<NotificationFilter[]>([
    "All",
    "Mentions",
  ]);
  const FILTERS: NotificationFilter[] = useMemo(() => ["All", "Mentions"], []);

  const toggleFilter = (value: NotificationFilter) => {
    setSelectedFilters((prev) =>
      prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value],
    );
  };
  const handleFilterIconMeasured = (pageY: number, height: number) => {
    setMenuTop(pageY + height + 10);
    setMenuVisible(true);
  };

  const handleClearAll = () => {
    // later: clear notifications state
  };
  return (
    <>
      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>Notifications</Text>

            <Pressable
              hitSlop={10}
              onPress={(e) => {
                e.currentTarget?.measure?.((x, y, w, h, pageX, pageY) => {
                  handleFilterIconMeasured(pageY, h);
                });
              }}
              style={({ pressed }) => [pressed && styles.iconPressed]}
            >
              <Ionicons name="filter-outline" size={28} color="#111" />
            </Pressable>
          </View>

          <View style={styles.actionsRow}>
            <Pressable
              style={({ pressed }) => [
                styles.clearAllButton,
                pressed && { opacity: 0.85 },
              ]}
              onPress={handleClearAll}
            >
              <Ionicons name="trash-outline" size={20} color="#111" />
              <Text style={styles.clearAllText}>Clear All</Text>
            </Pressable>
          </View>

          <View style={styles.content}>
            <Text style={styles.sectionLabel}>Today</Text>
          </View>
        </View>

        <Modal
          visible={menuVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setMenuVisible(false)}
        >
          <Pressable
            style={StyleSheet.absoluteFill}
            onPress={() => setMenuVisible(false)}
          />

          {menuTop !== null && (
            <View style={[styles.dropdown, { top: menuTop, right: 24 }]}>
              {FILTERS.map((filter) => (
                <View key={filter} style={styles.optionRow}>
                  <Checkbox
                    value={selectedFilters.includes(filter)}
                    onValueChange={() => toggleFilter(filter)}
                    color={PRIMARY_COLOR_BLUE}
                  />
                  <Text style={styles.optionText}>{filter}</Text>
                </View>
              ))}
            </View>
          )}
        </Modal>
      </SafeAreaView>

      <BottomTabBar activeTab="notifications" />
    </>
  );
};

export default Notification;
