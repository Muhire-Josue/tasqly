/* eslint-disable complexity */
import React, { useState } from "react";
import { View, Text, Pressable, Modal, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import type { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../types/navigation";
import MOCK_TASKS from "../../../mocks/tasks";
import styles from "./styles";
import BottomTabBar from "../../../components/common/BottomTabBar";
import { PRIMARY_COLOR_BLUE } from "../../../theme/colors";
import { STATUS_META } from "../../../mocks/statusMeta";
import { useNavigateTo } from "../../../navigation/useNavigateTo";

type TaskDetailsRoute = RouteProp<RootStackParamList, "task-details">;

const TaskDetails: React.FC = () => {
  const navigateTo = useNavigateTo();

  const route = useRoute<TaskDetailsRoute>();
  const { taskId } = route.params;

  const task = MOCK_TASKS.find((t) => t.id === taskId);
  const taskTitle = task?.title ?? "Task not found";

  const isUrgent = !!task?.urgent;
  const commentsCount = task?.commentsCount ?? 7;

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  if (!task) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.title}>Task not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  const statusMeta = STATUS_META[task?.status ?? "Pending"];

  const handleDeletePress = () => {
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    // TODO: delete in backend / store, then navigate back
    setShowDeleteModal(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  const handleMarkComplete = () => {
    // TODO: update status to Completed (later backend)
  };

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <View style={styles.headerRow}>
              <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
                {taskTitle}
              </Text>
            </View>

            <View style={styles.actionRow}>
              <Pressable
                style={({ pressed }) => [
                  styles.deleteButton,
                  pressed && styles.actionButtonPressed,
                ]}
                onPress={handleDeletePress}
              >
                <FontAwesome5
                  name="trash-alt"
                  size={18}
                  color="#FFFFFF"
                  style={styles.actionIcon}
                />
                <Text style={styles.deleteText}>Delete</Text>
              </Pressable>

              <Pressable
                style={({ pressed }) => [
                  styles.editButton,
                  pressed && styles.actionButtonPressed,
                ]}
                onPress={() => {
                  navigateTo("edit-task", { taskId, header: "Edit Task" });
                }}
              >
                <FontAwesome5
                  name="pen"
                  size={18}
                  color="#FFFFFF"
                  style={styles.actionIcon}
                />
                <Text style={styles.editText}>Edit</Text>
              </Pressable>
            </View>

            <View style={styles.infoRow}>
              <View style={styles.infoColumn}>
                <View style={styles.infoLabelRow}>
                  <FontAwesome5
                    name="user-friends"
                    size={18}
                    color="#111"
                    style={styles.infoLabelIcon}
                  />
                  <Text style={styles.infoLabelText}>Responsible :</Text>
                </View>

                <View style={styles.responsibleValueRow}>
                  {task?.avatar ? (
                    <Image
                      source={task.avatar}
                      style={styles.responsibleAvatar}
                    />
                  ) : (
                    <View style={styles.responsibleAvatarPlaceholder}>
                      <FontAwesome5 name="user" size={16} color="#9CA3AF" />
                    </View>
                  )}
                  <Text style={styles.responsibleName}>
                    {task?.assignee ?? "Unassigned"}
                  </Text>
                </View>
              </View>

              <View style={styles.infoColumn}>
                <View style={styles.infoLabelRow}>
                  <FontAwesome5
                    name="calendar-alt"
                    size={18}
                    color="#111"
                    style={styles.infoLabelIcon}
                  />
                  <Text style={styles.infoLabelText}>Deadline :</Text>
                </View>

                <Text style={styles.deadlineText}>
                  {task?.dueDate ?? "No deadline"}
                </Text>
              </View>
            </View>
            <View style={styles.metaSection}>
              <View style={styles.statusUrgentRow}>
                <View style={styles.statusRow}>
                  <Text style={styles.statusLabel}>Status:</Text>

                  <Text style={styles.statusValue}>{statusMeta.label}</Text>

                  <FontAwesome5
                    name={statusMeta.icon}
                    size={20}
                    color={statusMeta.color}
                    style={styles.statusIcon}
                  />
                </View>

                {isUrgent && (
                  <View style={styles.urgentPill}>
                    <Ionicons
                      name="warning-outline"
                      size={18}
                      color="#FFFFFF"
                      style={{ marginRight: 8 }}
                    />
                    <Text style={styles.urgentText}>Urgent</Text>
                  </View>
                )}
              </View>

              <Pressable
                style={({ pressed }) => [
                  styles.commentsRow,
                  pressed && { opacity: 0.8 },
                ]}
                onPress={() => {
                  // TODO: navigate to comments screen later
                }}
              >
                <Ionicons
                  name="chatbox-ellipses-outline"
                  size={26}
                  color={PRIMARY_COLOR_BLUE}
                  style={{ marginRight: 10 }}
                />
                <Text style={styles.commentsLink}>
                  Comments ({commentsCount})
                </Text>
              </Pressable>
            </View>
            <View style={styles.descriptionSection}>
              <Text style={styles.descriptionLabel}>Description :</Text>

              <View style={styles.descriptionBox}>
                <Text style={styles.descriptionText}>
                  {task.description.trim() ? task.description : "—"}
                </Text>
              </View>
            </View>
            <Pressable
              style={({ pressed }) => [
                styles.completeButton,
                pressed && styles.completeButtonPressed,
              ]}
              onPress={handleMarkComplete}
            >
              <FontAwesome5
                name="check-circle"
                size={26}
                color="#FFFFFF"
                style={styles.completeIcon}
              />
              <Text style={styles.completeText}>Mark as Complete</Text>
            </Pressable>
          </View>
        </ScrollView>

        <Modal
          visible={showDeleteModal}
          transparent
          animationType="fade"
          onRequestClose={handleCancelDelete}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalCard}>
              <Text style={styles.modalTitle}>Delete Task?</Text>
              <Text style={styles.modalMessage}>
                Are you sure you want to delete “{taskTitle}”? This action
                cannot be undone.
              </Text>

              <View style={styles.modalButtonsRow}>
                <Pressable
                  style={({ pressed }) => [
                    styles.modalCancelButton,
                    pressed && styles.modalButtonPressed,
                  ]}
                  onPress={handleCancelDelete}
                >
                  <Text style={styles.modalCancelText}>Cancel</Text>
                </Pressable>

                <Pressable
                  style={({ pressed }) => [
                    styles.modalDeleteButton,
                    pressed && styles.modalButtonPressed,
                  ]}
                  onPress={handleConfirmDelete}
                >
                  <Text style={styles.modalDeleteText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
      <BottomTabBar />
    </>
  );
};

export default TaskDetails;
