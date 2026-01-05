import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import styles from "./style/card";
import { TaskCard } from "../types/tasks";
import { PRIMARY_COLOR_RED } from "../theme/colors";

interface CardProps {
  item: TaskCard;
  onPress?: () => void;
}

const Card: React.FC<CardProps> = ({ item, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.taskCard,
        pressed && { opacity: 0.9, transform: [{ scale: 0.99 }] },
      ]}
    >
      <View
        style={[styles.taskSideStrip, { backgroundColor: item.sideColor }]}
      />

      <View style={styles.taskCardInner}>
        <View style={styles.taskHeaderRow}>
          <Text style={styles.taskTitle}>{item.title}</Text>
          <View
            style={[styles.statusPill, { backgroundColor: item.statusColor }]}
          >
            <Text style={styles.statusPillText}>{item.status}</Text>
          </View>
        </View>

        <View style={styles.taskMetaRow}>
          <View style={styles.dateColumn}>
            <View style={styles.metaRow}>
              <FontAwesome5
                name="calendar-alt"
                size={16}
                color={item.dateColor}
              />
              <Text style={[styles.dateText, { color: item.dateColor }]}>
                {item.dueDate}
              </Text>
            </View>

            {item.urgent && (
              <View style={styles.metaRow}>
                <FontAwesome5
                  name="exclamation-circle"
                  size={16}
                  color={PRIMARY_COLOR_RED}
                />
                <Text style={styles.urgentText}>Urgent</Text>
              </View>
            )}
          </View>

          <View style={styles.assigneeColumn}>
            <Image source={item.avatar} style={styles.assigneeAvatar} />
            <Text
              style={styles.assigneeLabel}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.assignee}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Card;
