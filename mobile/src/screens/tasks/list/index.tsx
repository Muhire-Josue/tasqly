import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import FontAwesome5 from "@expo/vector-icons/build/FontAwesome5";
import { FlatList } from "react-native";
import styles from "./styles";
import Stats from "../../../components/common/Stats";
import HeaderInfo from "../../../components/common/HeaderInfo";
import TaskFilterBar from "../../../components/common/TaskFilterBar";

import BenAvatar from "../../../assets/ben.jpg";
import MichealAvatar from "../../../assets/michael.jpg";
import VinceAvatar from "../../../assets/vince.jpg";
import wellingtonAvatar from "../../../assets/wellington.jpg";
import BottomTabBar from "../../../components/common/BottomTabBar";
import { TAB_BAR_HEIGHT } from "../../../theme/sizes";
const TaskList: React.FC = () => {
  type TaskStatus = "Pending" | "Completed" | "Rejected";

  type TaskCard = {
    id: string;
    title: string;
    status: TaskStatus;
    dateLabel: string;
    sideColor: string;
    statusColor: string;
    dateColor: string;
    urgent?: boolean;
    assigneeLabel: string;
    avatar: ImageSourcePropType;
  };

  const MOCK_TASKS: TaskCard[] = [
    {
      id: "1",
      title: "Take out plastic trash",
      status: "Pending",
      dateLabel: "March 25 - 12:00 PM",
      sideColor: "#F4A11A",
      statusColor: "#F4A11A",
      dateColor: "#F4A11A",
      urgent: false,
      assigneeLabel: "Assigned to Jane",
      avatar: BenAvatar,
    },
    {
      id: "2",
      title: "Buy Groceries",
      status: "Completed",
      dateLabel: "March 12 - 2:23 PM",
      sideColor: "#3CCB79",
      statusColor: "#3CCB79",
      dateColor: "#3CCB79",
      urgent: true,
      assigneeLabel: "Assigned to Johnson",
      avatar: MichealAvatar,
    },
    {
      id: "3",
      title: "Cook Dinner",
      status: "Rejected",
      dateLabel: "March 10 - 7:00 PM",
      sideColor: "#D62828",
      statusColor: "#D62828",
      dateColor: "#D62828",
      urgent: false,
      assigneeLabel: "Created by Mike",
      avatar: VinceAvatar,
    },
    {
      id: "4",
      title: "Walk the dog",
      status: "Completed",
      dateLabel: "March 15 - 3:23 PM",
      sideColor: "#3CCB79",
      statusColor: "#3CCB79",
      dateColor: "#3CCB79",
      urgent: true,
      assigneeLabel: "Assigned to Johnson",
      avatar: wellingtonAvatar,
    },
    {
      id: "5",
      title: "Take out plastic trash",
      status: "Pending",
      dateLabel: "March 25 - 12:00 PM",
      sideColor: "#F4A11A",
      statusColor: "#F4A11A",
      dateColor: "#F4A11A",
      urgent: false,
      assigneeLabel: "Assigned to Jane",
      avatar: BenAvatar,
    },
    {
      id: "6",
      title: "Buy Groceries",
      status: "Completed",
      dateLabel: "March 12 - 2:23 PM",
      sideColor: "#3CCB79",
      statusColor: "#3CCB79",
      dateColor: "#3CCB79",
      urgent: true,
      assigneeLabel: "Assigned to Johnson",
      avatar: MichealAvatar,
    },
    {
      id: "7",
      title: "Cook Dinner",
      status: "Rejected",
      dateLabel: "March 10 - 7:00 PM",
      sideColor: "#D62828",
      statusColor: "#D62828",
      dateColor: "#D62828",
      urgent: false,
      assigneeLabel: "Created by Mike",
      avatar: VinceAvatar,
    },
    {
      id: "8",
      title: "Walk the dog",
      status: "Completed",
      dateLabel: "March 15 - 3:23 PM",
      sideColor: "#3CCB79",
      statusColor: "#3CCB79",
      dateColor: "#3CCB79",
      urgent: true,
      assigneeLabel: "Assigned to Johnson",
      avatar: wellingtonAvatar,
    },
    {
      id: "9",
      title: "Take out plastic trash",
      status: "Pending",
      dateLabel: "March 25 - 12:00 PM",
      sideColor: "#F4A11A",
      statusColor: "#F4A11A",
      dateColor: "#F4A11A",
      urgent: false,
      assigneeLabel: "Assigned to Jane",
      avatar: BenAvatar,
    },
    {
      id: "10",
      title: "Buy Groceries",
      status: "Completed",
      dateLabel: "March 12 - 2:23 PM",
      sideColor: "#3CCB79",
      statusColor: "#3CCB79",
      dateColor: "#3CCB79",
      urgent: true,
      assigneeLabel: "Assigned to Johnson",
      avatar: MichealAvatar,
    },
    {
      id: "11",
      title: "Cook Dinner",
      status: "Rejected",
      dateLabel: "March 10 - 7:00 PM",
      sideColor: "#D62828",
      statusColor: "#D62828",
      dateColor: "#D62828",
      urgent: false,
      assigneeLabel: "Created by Mike",
      avatar: VinceAvatar,
    },
    {
      id: "12",
      title: "Walk the dog",
      status: "Completed",
      dateLabel: "March 15 - 3:23 PM",
      sideColor: "#3CCB79",
      statusColor: "#3CCB79",
      dateColor: "#3CCB79",
      urgent: true,
      assigneeLabel: "Assigned to Johnson",
      avatar: wellingtonAvatar,
    },
    {
      id: "13",
      title: "Take out plastic trash",
      status: "Pending",
      dateLabel: "March 25 - 12:00 PM",
      sideColor: "#F4A11A",
      statusColor: "#F4A11A",
      dateColor: "#F4A11A",
      urgent: false,
      assigneeLabel: "Assigned to Jane",
      avatar: BenAvatar,
    },
    {
      id: "14",
      title: "Buy Groceries",
      status: "Completed",
      dateLabel: "March 12 - 2:23 PM",
      sideColor: "#3CCB79",
      statusColor: "#3CCB79",
      dateColor: "#3CCB79",
      urgent: true,
      assigneeLabel: "Assigned to Johnson",
      avatar: MichealAvatar,
    },
    {
      id: "15",
      title: "Cook Dinner",
      status: "Rejected",
      dateLabel: "March 10 - 7:00 PM",
      sideColor: "#D62828",
      statusColor: "#D62828",
      dateColor: "#D62828",
      urgent: false,
      assigneeLabel: "Created by Mike",
      avatar: VinceAvatar,
    },
    {
      id: "16",
      title: "Walk the dog",
      status: "Completed",
      dateLabel: "March 15 - 3:23 PM",
      sideColor: "#3CCB79",
      statusColor: "#3CCB79",
      dateColor: "#3CCB79",
      urgent: true,
      assigneeLabel: "Assigned to Johnson",
      avatar: wellingtonAvatar,
    },
    {
      id: "17",
      title: "Take out plastic trash",
      status: "Pending",
      dateLabel: "March 25 - 12:00 PM",
      sideColor: "#F4A11A",
      statusColor: "#F4A11A",
      dateColor: "#F4A11A",
      urgent: false,
      assigneeLabel: "Assigned to Jane",
      avatar: BenAvatar,
    },
    {
      id: "18",
      title: "Buy Groceries",
      status: "Completed",
      dateLabel: "March 12 - 2:23 PM",
      sideColor: "#3CCB79",
      statusColor: "#3CCB79",
      dateColor: "#3CCB79",
      urgent: true,
      assigneeLabel: "Assigned to Johnson",
      avatar: MichealAvatar,
    },
    {
      id: "19",
      title: "Cook Dinner",
      status: "Rejected",
      dateLabel: "March 10 - 7:00 PM",
      sideColor: "#D62828",
      statusColor: "#D62828",
      dateColor: "#D62828",
      urgent: false,
      assigneeLabel: "Created by Mike",
      avatar: VinceAvatar,
    },
    {
      id: "20",
      title: "Walk the dog",
      status: "Completed",
      dateLabel: "March 15 - 3:23 PM",
      sideColor: "#3CCB79",
      statusColor: "#3CCB79",
      dateColor: "#3CCB79",
      urgent: true,
      assigneeLabel: "Assigned to Johnson",
      avatar: wellingtonAvatar,
    },
    {
      id: "21",
      title: "Take out plastic trash",
      status: "Pending",
      dateLabel: "March 25 - 12:00 PM",
      sideColor: "#F4A11A",
      statusColor: "#F4A11A",
      dateColor: "#F4A11A",
      urgent: false,
      assigneeLabel: "Assigned to Jane",
      avatar: BenAvatar,
    },
    {
      id: "22",
      title: "Buy Groceries",
      status: "Completed",
      dateLabel: "March 12 - 2:23 PM",
      sideColor: "#3CCB79",
      statusColor: "#3CCB79",
      dateColor: "#3CCB79",
      urgent: true,
      assigneeLabel: "Assigned to Johnson",
      avatar: MichealAvatar,
    },
    {
      id: "23",
      title: "Cook Dinner",
      status: "Rejected",
      dateLabel: "March 10 - 7:00 PM",
      sideColor: "#D62828",
      statusColor: "#D62828",
      dateColor: "#D62828",
      urgent: false,
      assigneeLabel: "Created by Mike",
      avatar: VinceAvatar,
    },
    {
      id: "24",
      title: "Walk the dog",
      status: "Completed",
      dateLabel: "March 15 - 3:23 PM",
      sideColor: "#3CCB79",
      statusColor: "#3CCB79",
      dateColor: "#3CCB79",
      urgent: true,
      assigneeLabel: "Assigned to Johnson",
      avatar: wellingtonAvatar,
    },
    {
      id: "25",
      title: "Take out plastic trash",
      status: "Pending",
      dateLabel: "March 25 - 12:00 PM",
      sideColor: "#F4A11A",
      statusColor: "#F4A11A",
      dateColor: "#F4A11A",
      urgent: false,
      assigneeLabel: "Assigned to Jane",
      avatar: BenAvatar,
    },
    {
      id: "26",
      title: "Buy Groceries",
      status: "Completed",
      dateLabel: "March 12 - 2:23 PM",
      sideColor: "#3CCB79",
      statusColor: "#3CCB79",
      dateColor: "#3CCB79",
      urgent: true,
      assigneeLabel: "Assigned to Johnson",
      avatar: MichealAvatar,
    },
    {
      id: "27",
      title: "Cook Dinner",
      status: "Rejected",
      dateLabel: "March 10 - 7:00 PM",
      sideColor: "#D62828",
      statusColor: "#D62828",
      dateColor: "#D62828",
      urgent: false,
      assigneeLabel: "Created by Mike",
      avatar: VinceAvatar,
    },
    {
      id: "28",
      title: "Walk the dog",
      status: "Completed",
      dateLabel: "March 15 - 3:23 PM",
      sideColor: "#3CCB79",
      statusColor: "#3CCB79",
      dateColor: "#3CCB79",
      urgent: true,
      assigneeLabel: "Assigned to Johnson",
      avatar: wellingtonAvatar,
    },
    {
      id: "29",
      title: "Take out plastic trash",
      status: "Pending",
      dateLabel: "March 25 - 12:00 PM",
      sideColor: "#F4A11A",
      statusColor: "#F4A11A",
      dateColor: "#F4A11A",
      urgent: false,
      assigneeLabel: "Assigned to Jane",
      avatar: BenAvatar,
    },
    {
      id: "30",
      title: "Buy Groceries",
      status: "Completed",
      dateLabel: "March 12 - 2:23 PM",
      sideColor: "#3CCB79",
      statusColor: "#3CCB79",
      dateColor: "#3CCB79",
      urgent: true,
      assigneeLabel: "Assigned to Johnson",
      avatar: MichealAvatar,
    },
    {
      id: "31",
      title: "Cook Dinner",
      status: "Rejected",
      dateLabel: "March 10 - 7:00 PM",
      sideColor: "#D62828",
      statusColor: "#D62828",
      dateColor: "#D62828",
      urgent: false,
      assigneeLabel: "Created by Mike",
      avatar: VinceAvatar,
    },
    {
      id: "32",
      title: "Walk the dog",
      status: "Completed",
      dateLabel: "March 15 - 3:23 PM",
      sideColor: "#3CCB79",
      statusColor: "#3CCB79",
      dateColor: "#3CCB79",
      urgent: true,
      assigneeLabel: "Assigned to Johnson",
      avatar: wellingtonAvatar,
    },
  ];

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#e7fafeff" }}
      edges={["top", "left", "right"]}
    >
      <View style={styles.container}>
        <HeaderInfo />
        <Stats />
        <TaskFilterBar />

        <View style={styles.taskList}>
          <FlatList
            data={MOCK_TASKS}
            keyExtractor={(item) => item.id}
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
              paddingBottom: TAB_BAR_HEIGHT + insets.bottom
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
