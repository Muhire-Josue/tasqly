import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Checkbox from "expo-checkbox";

import styles from "./styles";
import HeaderInfo from "../../../components/common/HeaderInfo";
import Stats from "../../../components/common/Stats";
import TaskFilterBar, { Scope } from "../../../components/common/TaskFilterBar";
import BottomTabBar from "../../../components/common/BottomTabBar";

import { PRIMARY_COLOR_BLUE } from "../../../theme/colors";
import { TaskStatus } from "../../../types/tasks";
import MOCK_TASKS from "../../../mocks/tasks";
import Card from "../../../components/common/Card";

const STATUSES: TaskStatus[] = ["Pending", "Completed", "Rejected"];

const TaskList: React.FC = () => {
  const [scope, setScope] = useState<Scope>("all");
  const [selectedStatuses, setSelectedStatuses] = useState<TaskStatus[]>([
    "Pending",
    "Completed",
    "Rejected",
  ]);

  const [menuVisible, setMenuVisible] = useState(false);
  const [menuTop, setMenuTop] = useState<number | null>(null);

  const toggleStatus = (value: TaskStatus) => {
    setSelectedStatuses((prev) =>
      prev.includes(value)
        ? (prev.filter((s) => s !== value) as TaskStatus[])
        : [...prev, value],
    );
  };

  const handleFilterIconMeasured = (pageY: number, height: number) => {
    setMenuTop(pageY + height + 6);
    setMenuVisible(true);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#e7fafeff" }}
      edges={["top", "left", "right"]}
    >
      <View style={styles.container}>
        <View style={styles.taskList}>
          <FlatList
            data={MOCK_TASKS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Card item={item} />}
            ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
            contentContainerStyle={{
              paddingBottom: 16,
            }}
            ListHeaderComponent={
              <View style={styles.listHeader}>
                <HeaderInfo />
                <Stats />
                <TaskFilterBar
                  scope={scope}
                  onScopeChange={setScope}
                  selectedStatuses={selectedStatuses}
                  onToggleStatus={toggleStatus}
                  onFilterIconMeasured={handleFilterIconMeasured}
                />
              </View>
            }
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>

      {/* Dropdown Modal stays the same */}
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
            {STATUSES.map((status) => (
              <View key={status} style={styles.optionRow}>
                <Checkbox
                  value={selectedStatuses.includes(status)}
                  onValueChange={() => toggleStatus(status)}
                  color={PRIMARY_COLOR_BLUE}
                />
                <Text style={styles.optionText}>{status}</Text>
              </View>
            ))}
          </View>
        )}
      </Modal>

      <BottomTabBar />
    </SafeAreaView>
  );
};

export default TaskList;
