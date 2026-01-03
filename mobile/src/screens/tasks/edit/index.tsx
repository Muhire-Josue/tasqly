/* eslint-disable complexity */
import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  Modal,
  Switch,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Calendar } from "react-native-calendars";
import Checkbox from "expo-checkbox";
import { RootStackParamList } from "../../../types/navigation";
import MOCK_TASKS from "../../../mocks/tasks";
import styles from "./styles";
import { useNavigateTo } from "../../../navigation/useNavigateTo";
import { PRIMARY_COLOR_BLUE } from "../../../theme/colors";
import BottomTabBar from "../../../components/common/BottomTabBar";
import { Frequency, TaskStatus } from "../../../types/tasks";
import { STATUS_META } from "../../../mocks/statusMeta";
import { Member, MEMBERS_MOCK } from "../../../mocks/members";

type TaskDetailsRoute = RouteProp<RootStackParamList, "edit-task">;

const FREQUENCIES: Frequency[] = [
  "None",
  "Daily",
  "Weekly",
  "Bi-weekly",
  "Monthly",
];

const EditTask: React.FC = () => {
  const navigateTo = useNavigateTo();

  const route = useRoute<TaskDetailsRoute>();
  const { header, taskId } = route.params;

  const task = MOCK_TASKS.find((t) => t.id === taskId);
  const currentMember = MEMBERS_MOCK.find((m) => m.name === task?.assignee);

  const [title, setTitle] = useState<string | null>(
    task?.title ?? "Task not found",
  );
  const [isUrgent, setIsUrgent] = useState<boolean | null>(
    task?.urgent ?? false,
  );

  const [status, setStatus] = useState<TaskStatus | null>(
    task?.status ?? "Pending",
  );
  const [frequency, setFrequency] = useState<Frequency | null>(
    task?.frequency ?? null,
  );
  const [showFrequencyMenu, setShowFrequencyMenu] = useState(false);
  const [showStatusMenu, setShowStatusMenu] = useState(false);
  const [dueDate, setDueDate] = useState<string | null>(task?.dueDate ?? null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedAssignee, setSelectedAssignee] = useState<Member | null>(
    currentMember ?? null,
  );
  const [assigneeRotationEnabled, setAssigneeRotationEnabled] = useState(
    task?.assigneeRotationEnabled,
  );
  const [showAssigneeModal, setShowAssigneeModal] = useState(false);
  // const [description, setDescription] = useState("");

  const handleCancel = () => {
    navigateTo("task-list");
    setTitle(null);
    setIsUrgent(false);
    setStatus("Pending");
    setDueDate(null);
    // setSelectedAssignee(null);
  };
  const handlePickDate = () => {
    setShowCalendar(true);
  };

  return (
    <>
      <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>{header}</Text>

            <Pressable
              style={({ pressed }) => [
                styles.cancelButton,
                pressed && { opacity: 0.9 },
              ]}
              onPress={handleCancel}
            >
              <Ionicons
                name="close-circle-outline"
                size={30}
                color="#FFFFFF"
                style={{ marginRight: 6 }}
              />
              <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>
          </View>
          <View style={styles.formSection}>
            <Text style={styles.label}>Title</Text>
            <TextInput
              value={title ? title : ""}
              onChangeText={setTitle}
              placeholder="Ex: Groceries"
              placeholderTextColor="#A0A0A0"
              style={styles.textInput}
            />

            <View style={styles.urgentRow}>
              <Checkbox
                value={isUrgent ?? false}
                onValueChange={setIsUrgent}
                color={isUrgent ? PRIMARY_COLOR_BLUE : undefined}
              />
              <Text style={styles.urgentLabel}>This Task Is Urgent</Text>
            </View>

            <View style={styles.statusRow}>
              <View style={styles.statusDropdownWrapper}>
                <Pressable
                  style={styles.statusSelector}
                  onPress={() => setShowStatusMenu((prev) => !prev)}
                >
                  <Ionicons name="chevron-down" size={22} color="#000" />
                  <Text style={styles.statusSelectorText}>
                    {STATUS_META[status ?? "Pending"].label}
                  </Text>
                </Pressable>

                {showStatusMenu && (
                  <View style={styles.statusDropdownMenu}>
                    {(Object.keys(STATUS_META) as TaskStatus[]).map(
                      (option) => (
                        <Pressable
                          key={option}
                          style={styles.statusOptionRow}
                          onPress={() => {
                            setStatus(option);
                            setShowStatusMenu(false);
                          }}
                        >
                          <Text style={styles.statusOptionText}>
                            {STATUS_META[option].label}
                          </Text>
                        </Pressable>
                      ),
                    )}
                  </View>
                )}
              </View>

              <View style={{ flex: 1 }} />
            </View>
            <View style={styles.statusFrequencyHeaderRow}>
              <View style={styles.statusSummaryLeft}>
                <Text style={styles.statusSummaryLabel}>Status:</Text>
                <View style={styles.statusSummaryValue}>
                  <Ionicons
                    name={STATUS_META[status ?? "Pending"].icon}
                    size={18}
                    color={STATUS_META[status ?? "Pending"].color}
                    style={{ marginRight: 6 }}
                  />
                  <Text style={styles.statusSummaryText}>
                    {STATUS_META[status ?? "Pending"].label}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.dateRow}>
              <View style={styles.dateButtonWrapper}>
                <Pressable style={styles.dateButton} onPress={handlePickDate}>
                  <FontAwesome5
                    name="calendar-alt"
                    size={20}
                    color="#FFFFFF"
                    style={{ marginRight: 8 }}
                  />
                  <Text style={styles.dateButtonText}>Pick a Date</Text>
                </Pressable>
              </View>

              <View style={styles.frequencyWrapper}>
                <View style={styles.frequencyDropdownWrapper}>
                  <Pressable
                    style={styles.frequencySelector}
                    onPress={() => setShowFrequencyMenu((prev) => !prev)}
                  >
                    <Ionicons name="chevron-down" size={20} color="#000" />
                    <Text style={styles.frequencySelectorText}>
                      {frequency}
                    </Text>
                  </Pressable>

                  {showFrequencyMenu && (
                    <View style={styles.frequencyDropdownMenu}>
                      {FREQUENCIES.map((option) => (
                        <Pressable
                          key={option}
                          style={styles.frequencyOptionRow}
                          onPress={() => {
                            setFrequency(option);
                            setShowFrequencyMenu(false);
                          }}
                        >
                          <Text style={styles.frequencyOptionText}>
                            {frequency ?? "None"}
                          </Text>
                        </Pressable>
                      ))}
                    </View>
                  )}
                </View>
              </View>
            </View>
            <View style={styles.dueDateRow}>
              <Text style={styles.dueDateLabel}>Due Date:</Text>
              <Text style={styles.dueDateValue}>{dueDate}</Text>
            </View>
            <Modal
              visible={showCalendar}
              transparent
              animationType="fade"
              onRequestClose={() => setShowCalendar(false)}
            >
              <View style={styles.calendarOverlay}>
                <View style={styles.calendarCard}>
                  <Calendar
                    onDayPress={(day) => {
                      setDueDate(day.dateString);
                      setShowCalendar(false);
                    }}
                    markedDates={
                      dueDate
                        ? {
                            [dueDate]: {
                              selected: true,
                              selectedColor: PRIMARY_COLOR_BLUE,
                              selectedTextColor: "#FFFFFF",
                            },
                          }
                        : undefined
                    }
                  />

                  <Pressable
                    style={styles.calendarCloseButton}
                    onPress={() => setShowCalendar(false)}
                  >
                    <Text style={styles.calendarCloseText}>Close</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <View style={styles.assigneeSection}>
              <View style={styles.assigneeHeaderRow}>
                <View style={styles.assigneeButtonWrapper}>
                  <Pressable
                    style={styles.assigneeButton}
                    // onPress={() => setShowAssigneeModal(true)}
                  >
                    <Ionicons
                      name="person-add-outline"
                      size={20}
                      color="#FFFFFF"
                      style={{ marginRight: 8 }}
                    />
                    <Text style={styles.assigneeButtonText}>Add Assignee</Text>
                  </Pressable>
                </View>

                <View style={styles.rotationWrapper}>
                  <Switch
                    value={assigneeRotationEnabled}
                    onValueChange={setAssigneeRotationEnabled}
                    disabled={frequency === "None"}
                    trackColor={{
                      false: "#D1D5DB",
                      true: PRIMARY_COLOR_BLUE,
                    }}
                    thumbColor="#FFFFFF"
                  />
                  <Text
                    style={[
                      styles.rotationLabel,
                      frequency === "None" && { color: "#B3B3B3" },
                    ]}
                  >
                    Assignee Rotation
                  </Text>
                </View>
              </View>
              {selectedAssignee && (
                <View style={styles.assigneeSummaryRow}>
                  <Text style={styles.assigneeSummaryLabel}>Assigned to:</Text>
                  <View style={styles.assigneeSummaryValue}>
                    <View style={styles.assigneeAvatar}>
                      {selectedAssignee.avatar ? (
                        <Image
                          source={selectedAssignee.avatar}
                          style={styles.assigneeAvatarImage}
                        />
                      ) : (
                        <Ionicons
                          name="person-outline"
                          size={20}
                          color="#888"
                        />
                      )}
                    </View>
                    <Text style={styles.assigneeSummaryName}>
                      {selectedAssignee.name}
                    </Text>
                  </View>
                </View>
              )}
              <Modal
                visible={showAssigneeModal}
                transparent
                animationType="fade"
                onRequestClose={() => setShowAssigneeModal(false)}
              >
                <View style={styles.assigneeOverlay}>
                  <View style={styles.assigneeCard}>
                    <View style={styles.assigneeHeader}>
                      <Text style={styles.assigneeTitle}>Select Assignee</Text>
                      <Pressable onPress={() => setShowAssigneeModal(false)}>
                        <Ionicons name="close" size={22} color="#111" />
                      </Pressable>
                    </View>

                    <ScrollView
                      showsVerticalScrollIndicator={false}
                      bounces={false}
                    >
                      {MEMBERS_MOCK.map((member) => (
                        <Pressable
                          key={member.id}
                          style={styles.assigneeRow}
                          onPress={() => {
                            setSelectedAssignee(member);
                            setShowAssigneeModal(false);
                          }}
                        >
                          {member.avatar ? (
                            <Image
                              source={member.avatar}
                              style={styles.assigneeAvatar}
                            />
                          ) : (
                            <View style={styles.assigneeAvatarPlaceholder}>
                              <Ionicons
                                name="person-outline"
                                size={18}
                                color="#9CA3AF"
                              />
                            </View>
                          )}

                          <Text style={styles.assigneeName}>{member.name}</Text>
                        </Pressable>
                      ))}
                    </ScrollView>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <BottomTabBar />
    </>
  );
};

export default EditTask;
