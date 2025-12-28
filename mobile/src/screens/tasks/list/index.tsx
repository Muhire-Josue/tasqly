import React from "react";
import { View, Text, Image } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import FontAwesome5 from "@expo/vector-icons/build/FontAwesome5";
import { FlatList } from "react-native";
import styles from "./styles";
import Stats from "../../../components/common/Stats";
import HeaderInfo from "../../../components/common/HeaderInfo";
import TaskFilterBar from "../../../components/common/TaskFilterBar";

import BottomTabBar from "../../../components/common/BottomTabBar";
import { TAB_BAR_HEIGHT } from "../../../theme/sizes";
import TaskCard from "../../../types/tasks";
import MOCK_TASKS from "../../../mocks/tasks";
const TaskList: React.FC = () => {
  const insets = useSafeAreaInsets();

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
            ListHeaderComponent={
              <View style={styles.listHeader}>
                <HeaderInfo />
                <Stats />
                <TaskFilterBar />
              </View>
            }
            renderItem={({ item }: { item: TaskCard }) => (
              <View key={item.id} style={styles.taskCard}>
                <View
                  style={[
                    styles.taskSideStrip,
                    { backgroundColor: item.sideColor },
                  ]}
                />

                {/* Card content */}
                <View style={styles.taskCardInner}>
                  {/* Title + status pill */}
                  <View style={styles.taskHeaderRow}>
                    <Text style={styles.taskTitle}>{item.title}</Text>

                    <View
                      style={[
                        styles.statusPill,
                        { backgroundColor: item.statusColor },
                      ]}
                    >
                      <Text style={styles.statusPillText}>{item.status}</Text>
                    </View>
                  </View>

                  {/* Date / urgency / assignee */}
                  <View style={styles.taskMetaRow}>
                    <View>
                      {/* Date row */}
                      <View style={styles.metaRow}>
                        <FontAwesome5
                          name="calendar-alt"
                          size={16}
                          color={item.dateColor}
                        />
                        <Text
                          style={[styles.dateText, { color: item.dateColor }]}
                        >
                          {item.dateLabel}
                        </Text>
                      </View>

                      {item.urgent && (
                        <View style={styles.metaRow}>
                          <FontAwesome5
                            name="exclamation-circle"
                            size={16}
                            color="#D62828"
                          />
                          <Text style={styles.urgentText}>Urgent</Text>
                        </View>
                      )}
                    </View>

                    {/* Assignee */}
                    <View style={styles.assigneeBlock}>
                      <Image
                        source={item.avatar}
                        style={styles.assigneeAvatar}
                      />
                      <Text style={styles.assigneeLabel}>
                        {item.assigneeLabel}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
            contentContainerStyle={{
              paddingBottom: TAB_BAR_HEIGHT + insets.bottom,
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      <SafeAreaView edges={["bottom"]} style={{ backgroundColor: "#FFFFFF" }}>
        <BottomTabBar />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default TaskList;
