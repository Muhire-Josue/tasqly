import React, { useState } from "react";
import {
  View,
  FlatList,
  Modal,
  Pressable,
  Text,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Checkbox from "expo-checkbox";
import styles from "./styles";
import MOCK_REPAIRS from "../../../mocks/repairs";
import { useNavigateTo } from "../../../navigation/useNavigateTo";
import Card from "../../../components/Card";
import HeaderInfo from "../../../components/HeaderInfo";
import Stats from "../../../components/Stats";
import TaskFilterBar, { Scope } from "../../../components/TaskFilterBar";
import { Status } from "../../../types/tasks";
import { PRIMARY_COLOR_BLUE } from "../../../theme/colors";
import BottomTabBar from "../../../components/BottomTabBar";

const RepairList: React.FC = () => {
  const navigateTo = useNavigateTo();
  const STATUSES: Status[] = ["Pending", "Completed", "Rejected"];

  const [scope, setScope] = useState<Scope>("all");
  const [selectedStatuses, setSelectedStatuses] = useState<Status[]>([
    "Pending",
    "Completed",
    "Rejected",
  ]);

  const [menuVisible, setMenuVisible] = useState(false);
  const [menuTop, setMenuTop] = useState<number | null>(null);

  const toggleStatus = (value: Status) => {
    setSelectedStatuses((prev) =>
      prev.includes(value)
        ? (prev.filter((s) => s !== value) as Status[])
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
        <View style={styles.repairList}>
          <FlatList
            data={MOCK_REPAIRS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card
                item={item}
                onPress={() =>
                  navigateTo("repair-details", {
                    repairId: item.id,
                  })
                }
              />
            )}
            ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
            contentContainerStyle={{
              paddingBottom: 16,
            }}
            ListHeaderComponent={
              <View style={styles.listHeader}>
                <HeaderInfo type={"repair"} />
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

export default RepairList;
