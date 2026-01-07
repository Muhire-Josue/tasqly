import React, { useMemo, useState } from "react";
import {
  Dimensions,
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
import NotificationEmptyState from "./no-content";

type NotificationFilter = "All" | "Mentions";

type Status = "pending" | "accepted" | "declined";

type Row =
  | { kind: "header"; id: string; title: string }
  | { kind: "item"; id: string; item: NotificationItem };

const FILTERS: NotificationFilter[] = ["All", "Mentions"];
const DROPDOWN_WIDTH = 260;

const Notification: React.FC = () => {
  // const [menuTop, setMenuTop] = useState<number | null>(null);
  const [statusById, setStatusById] = useState<Record<string, Status>>({});
  const [menuPos, setMenuPos] = useState<{ top: number; left: number } | null>(
    null,
  );
  const [menuVisible, setMenuVisible] = useState(false);

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const openFilterMenu = (ref: any) => {
    if (!ref?.measureInWindow) return;

    ref.measureInWindow((x: number, y: number, w: number, h: number) => {
      const screenW = Dimensions.get("window").width;

      const desiredLeft = x + w - DROPDOWN_WIDTH;
      const left = Math.max(
        12,
        Math.min(desiredLeft, screenW - DROPDOWN_WIDTH - 12),
      );
      const top = y + h + 10;

      setMenuPos({ top, left });
      setMenuVisible(true);
    });
  };
  return (
    <>
      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        <View style={styles.headerContainer}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>Notifications</Text>

            <Pressable
              hitSlop={10}
              onPress={(e) => openFilterMenu(e.currentTarget)}
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

        {rows.length === 0 ? (
          <NotificationEmptyState />
        ) : (
          <FlatList
            data={rows}
            keyExtractor={(row) => row.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 40, paddingHorizontal: 24 }}
            // ListEmptyComponent={<NoNotification />}
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
          />
        )}

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

          {menuPos && (
            <View
              style={[
                styles.dropdown,
                { top: menuPos.top, left: menuPos.left, width: DROPDOWN_WIDTH },
              ]}
            >
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
