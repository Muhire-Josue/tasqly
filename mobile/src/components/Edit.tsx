/* eslint-disable complexity */
import React, { useEffect, useMemo, useState } from "react";
import { CardType, Frequency, Status } from "../types/tasks";
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
import { Calendar } from "react-native-calendars";
import Checkbox from "expo-checkbox";
import styles from "./style/edit";
import { PRIMARY_COLOR_BLUE } from "../theme/colors";
import { STATUS_META } from "../mocks/statusMeta";
import { Member, MEMBERS_MOCK } from "../mocks/members";
import { validateCreateForm } from "../validators/create";
import { showMessage } from "react-native-flash-message";

const FREQUENCIES: Frequency[] = [
  "None",
  "Daily",
  "Weekly",
  "Bi-weekly",
  "Monthly",
];

interface EditProp {
  task?: CardType;
  repair?: CardType;
  reset: boolean;
}

const Edit: React.FC<EditProp> = ({ task, repair, reset }) => {
  const item = task ?? repair;
  const isRepair = !!repair && !task;

  const landlordMember = useMemo(
    () => MEMBERS_MOCK.find((m) => m.name === "Landlord") ?? null,
    [],
  );

  const initialAssignee: Member | null = useMemo(() => {
    if (!item) return null;

    if (isRepair) return landlordMember;

    return MEMBERS_MOCK.find((m) => m.name === item.assignee) ?? null;
  }, [item, isRepair, landlordMember]);

  const [title, setTitle] = useState<string>(item?.title ?? "");
  const [isUrgent, setIsUrgent] = useState<boolean>(item?.urgent ?? false);
  const [status, setStatus] = useState<Status>(item?.status ?? "Pending");
  const [frequency, setFrequency] = useState<Frequency>(
    item?.frequency ?? "None",
  );
  const [showFrequencyMenu, setShowFrequencyMenu] = useState(false);
  const [showStatusMenu, setShowStatusMenu] = useState(false);
  const [dueDate, setDueDate] = useState<string | null>(item?.dueDate ?? null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedAssignee, setSelectedAssignee] = useState<Member | null>(
    initialAssignee,
  );
  const [assigneeRotationEnabled, setAssigneeRotationEnabled] = useState(
    item?.assigneeRotationEnabled ?? false,
  );
  const [showAssigneeModal, setShowAssigneeModal] = useState(false);
  const [description, setDescription] = useState(item?.description ?? "");

  useEffect(() => {
    setTitle(item?.title ?? "");
    setIsUrgent(item?.urgent ?? false);
    setStatus(item?.status ?? "Pending");
    setFrequency(item?.frequency ?? "None");
    setDueDate(item?.dueDate ?? null);
    setDescription(item?.description ?? "");
    setAssigneeRotationEnabled(item?.assigneeRotationEnabled ?? false);

    setSelectedAssignee(isRepair ? landlordMember : initialAssignee);

    setShowCalendar(false);
    setShowStatusMenu(false);
    setShowFrequencyMenu(false);
    setShowAssigneeModal(false);
  }, [item, isRepair, landlordMember, initialAssignee]);

  useEffect(() => {
    if (!reset) return;

    setTitle("");
    setIsUrgent(false);
    setStatus("Pending");
    setFrequency("None");
    setDueDate(null);
    setDescription("");
    setAssigneeRotationEnabled(false);

    setSelectedAssignee(isRepair ? landlordMember : null);

    setShowCalendar(false);
    setShowStatusMenu(false);
    setShowFrequencyMenu(false);
    setShowAssigneeModal(false);
  }, [reset, isRepair, landlordMember]);

  const handlePickDate = () => setShowCalendar(true);

  const handleUpdate = () => {
    const errors = validateCreateForm(
      title,
      dueDate,
      selectedAssignee,
      description,
    );

    if (errors.length > 0) {
      showMessage({ message: errors[0], type: "danger", icon: "danger" });
      return;
    }

    showMessage({
      message: isRepair
        ? "Repair updated successfully"
        : "Task updated successfully",
      type: "success",
      icon: "success",
    });
  };

  if (!item) {
    return (
      <View style={styles.formSection}>
        <Text style={styles.label}>Item not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.formSection}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Ex: Groceries"
        placeholderTextColor="#A0A0A0"
        style={styles.textInput}
      />

      <View style={styles.urgentRow}>
        <Checkbox
          value={isUrgent}
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
              {STATUS_META[status].label}
            </Text>
          </Pressable>

          {showStatusMenu && (
            <View style={styles.statusDropdownMenu}>
              {(Object.keys(STATUS_META) as Status[]).map((option) => (
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
              ))}
            </View>
          )}
        </View>
        <View style={{ flex: 1 }} />
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
              <Text style={styles.frequencySelectorText}>{frequency}</Text>
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
                    <Text style={styles.frequencyOptionText}>{option}</Text>
                  </Pressable>
                ))}
              </View>
            )}
          </View>
        </View>
      </View>

      <View style={styles.dueDateRow}>
        <Text style={styles.dueDateLabel}>Due Date:</Text>
        <Text style={styles.dueDateValue}>{dueDate ?? "—"}</Text>
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
              style={[styles.assigneeButton, isRepair && { opacity: 0.5 }]}
              disabled={isRepair}
              onPress={() => setShowAssigneeModal(true)}
            >
              <Ionicons
                name="person-add-outline"
                size={20}
                color="#FFFFFF"
                style={{ marginRight: 8 }}
              />
              <Text style={styles.assigneeButtonText}>
                {isRepair ? "Assigned to Landlord" : "Add Assignee"}
              </Text>
            </Pressable>
          </View>

          {!isRepair && (
            <View style={styles.rotationWrapper}>
              <Switch
                value={assigneeRotationEnabled}
                onValueChange={setAssigneeRotationEnabled}
                disabled={frequency === "None"}
                trackColor={{ false: "#D1D5DB", true: PRIMARY_COLOR_BLUE }}
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
          )}
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
                  <Ionicons name="person-outline" size={20} color="#888" />
                )}
              </View>
              <Text style={styles.assigneeSummaryName}>
                {selectedAssignee.name}
              </Text>
            </View>
          </View>
        )}

        <Modal
          visible={showAssigneeModal && !isRepair}
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

              <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
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

      <Text style={styles.label}>Description</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Add a description for this task..."
        placeholderTextColor="#A0A0A0"
        style={styles.descriptionInput}
        multiline
        numberOfLines={4}
        textAlignVertical="top"
      />

      <View style={styles.createButtonWrapper}>
        <Pressable style={styles.createButton} onPress={handleUpdate}>
          <FontAwesome5
            name="pen"
            size={18}
            color="#FFFFFF"
            style={{ marginRight: 10 }}
          />
          <Text style={styles.createButtonText}>Update</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Edit;
