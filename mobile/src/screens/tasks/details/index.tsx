// TaskDetails.tsx
import React, { useState } from "react";
import { View, Text, Pressable, Modal, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import type { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../types/navigation";
import MOCK_TASKS from "../../../mocks/tasks";
import styles from "./styles";

type TaskDetailsRoute = RouteProp<RootStackParamList, "task-details">;

const TaskDetails: React.FC = () => {
  const route = useRoute<TaskDetailsRoute>();
  const { taskId } = route.params;

  const task = MOCK_TASKS.find((t) => t.id === taskId);
  const taskTitle = task?.title ?? "Task not found";

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEditPress = () => {
    // TODO: navigate to edit screen
  };

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

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Row 1 – centered title */}
        <View style={styles.headerRow}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {taskTitle}
          </Text>
        </View>

        {/* Row 2 – Delete (left) & Edit (right) */}
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
            onPress={handleEditPress}
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

        {/* Row 3 – Responsible & Deadline */}
        <View style={styles.infoRow}>
          {/* Responsible */}
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
                <Image source={task.avatar} style={styles.responsibleAvatar} />
              ) : (
                <View style={styles.responsibleAvatarPlaceholder}>
                  <FontAwesome5 name="user" size={16} color="#9CA3AF" />
                </View>
              )}
              <Text style={styles.responsibleName}>
                {task?.assigneeLabel ?? "Unassigned"}
              </Text>
            </View>
          </View>

          {/* Deadline */}
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
              {task?.dateLabel ?? "No deadline"}
            </Text>
          </View>
        </View>
      </View>

      {/* Delete confirmation modal */}
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
              Are you sure you want to delete “{taskTitle}”? This action cannot
              be undone.
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
  );
};

export default TaskDetails;
