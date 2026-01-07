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
import { showMessage } from "react-native-flash-message";

type NotificationFilter = "All" | "Mentions";

type Status = "pending" | "accepted" | "declined";

type Row =
  | { kind: "header"; id: string; title: string }
  | { kind: "item"; id: string; item: NotificationItem };

const FILTERS: NotificationFilter[] = ["All", "Mentions"];

const Notification: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuTop, setMenuTop] = useState<number | null>(null);
  const [statusById, setStatusById] = useState<Record<string, Status>>({});

  const [selectedFilters, setSelectedFilters] = useState<NotificationFilter[]>([
    "All",
    "Mentions",
  ]);
  const CURRENT_USER_ID = "1"; // TODO: later from auth/user context
  const grouped = useMemo(() => {
    const map: Record<string, NotificationItem[]> = {};
    MOCK_NOTIFICATIONS.forEach((n) => {
      (map[n.group] ||= []).push(n);
    });
    return map;
  }, []);

  const groupOrder = useMemo(() => Object.keys(grouped), [grouped]);
  const toggleFilter = (value: NotificationFilter) => {
    setSelectedFilters((prev) =>
      prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value],
    );
  };

  //   const handleFilterIconMeasured = (pageY: number, height: number) => {
  //     setMenuTop(pageY + height + 10);
  //     setMenuVisible(true);
  //   };

  const rows: Row[] = useMemo(() => {
    const out: Row[] = [];
    groupOrder.forEach((group) => {
      const items = grouped[group] ?? [];
      if (!items.length) return;

      out.push({ kind: "header", id: `header-${group}`, title: group });
      items.forEach((n) => out.push({ kind: "item", id: n.id, item: n }));
    });
    return out;
  }, [groupOrder, grouped]);

  const handleAccept = (n: NotificationItem) => {
    setStatusById((prev) => ({ ...prev, [n.id]: "accepted" }));
    showMessage({ message: "Task accepted", type: "success", icon: "success" });

    // later: call backend -> acceptTask(n.taskId)
  };

  const handleDecline = (n: NotificationItem) => {
    setStatusById((prev) => ({ ...prev, [n.id]: "declined" }));
    showMessage({ message: "Task declined", type: "danger", icon: "danger" });

    // later: call backend -> declineTask(n.taskId)
  };

  const handleClearAll = () => {
    // later: clear notifications state
  };

  return (
    <>
      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        <FlatList
          data={rows}
          keyExtractor={(row) => row.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: 24 }}
          ListHeaderComponent={
            <View>
              <View style={styles.headerRow}>
                <Text style={styles.title}>Notifications</Text>
                <Pressable
                  hitSlop={10}
                  style={({ pressed }) => [pressed && styles.iconPressed]}
                >
                  <Ionicons name="filter-outline" size={24} color="#111" />
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
                  <Ionicons name="close-outline" size={18} color="#111" />
                  <Text style={styles.clearAllText}>Clear All</Text>
                </Pressable>
              </View>
            </View>
          }
          renderItem={({ item }) => {
            if (item.kind === "header") {
              return <Text style={styles.sectionLabel}>{item.title}</Text>;
            }

            const n = item.item;

            const isAssignedToMe = n.assignedTo === CURRENT_USER_ID;
            const isTask = n.taskId !== null;
            const requiresResponse =
              n.requiresResponse ?? (isTask && isAssignedToMe);

            const decision: Status = statusById[n.id] ?? "pending";

            return (
              <NotificationCard
                item={n}
                decision={decision}
                showActions={requiresResponse && decision === "pending"}
                onAccept={() => handleAccept(n)}
                onDecline={() => handleDecline(n)}
                onDelete={() => console.log("delete", n.id)}
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
