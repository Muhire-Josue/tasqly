import React, { useMemo, useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

import styles from "./styles";
import BottomTabBar from "../../components/BottomTabBar";
import { PRIMARY_COLOR_BLUE } from "../../theme/colors";
import { NotificationItem } from "../../types/notifications";
import MOCK_NOTIFICATIONS from "../../mocks/notifications";
import NotificationCard from "./card";

type NotificationFilter = "All" | "Mentions";

type Row =
  | { kind: "header"; id: string; title: string }
  | { kind: "item"; id: string; item: NotificationItem };

const FILTERS: NotificationFilter[] = ["All", "Mentions"];

const Notification: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuTop, setMenuTop] = useState<number | null>(null);

  const [selectedFilters, setSelectedFilters] = useState<NotificationFilter[]>([
    "All",
    "Mentions",
  ]);

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

  const grouped = useMemo(() => {
    const map: Record<string, NotificationItem[]> = {};
    MOCK_NOTIFICATIONS.forEach((n) => {
      if (!map[n.group]) map[n.group] = [];
      map[n.group].push(n);
    });
    return map;
  }, []);

  const groupOrder = useMemo(() => Object.keys(grouped), [grouped]);

  const rows: Row[] = useMemo(() => {
    return groupOrder.flatMap((group) => {
      const items = grouped[group] ?? [];
      if (items.length === 0) return [];

      const header: Row = {
        kind: "header",
        id: `header-${group}`,
        title: group,
      };

      const list: Row[] = items.map((n) => ({
        kind: "item" as const,
        id: n.id,
        item: n,
      }));

      return [header, ...list];
    });
  }, [groupOrder, grouped]);

  return (
    <>
      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        <FlatList
          data={rows}
          keyExtractor={(row) => row.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: 24 }}
          ListHeaderComponent={
            <>
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
                  <Ionicons name="close-outline" size={22} color="#111" />
                  <Text style={styles.clearAllText}>Clear All</Text>
                </Pressable>
              </View>
            </>
          }
          renderItem={({ item }) => {
            if (item.kind === "header") {
              return (
                <View style={{ marginTop: 14 }}>
                  <Text style={styles.sectionLabel}>{item.title}</Text>
                </View>
              );
            }

            return (
              <NotificationCard
                item={item.item}
                onDelete={() => console.log("delete", item.item.id)}
              />
            );
          }}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        />

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
              {FILTERS.map((f) => (
                <View key={f} style={styles.optionRow}>
                  <Checkbox
                    value={selectedFilters.includes(f)}
                    onValueChange={() => toggleFilter(f)}
                    color={PRIMARY_COLOR_BLUE}
                  />
                  <Text style={styles.optionText}>{f}</Text>
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
