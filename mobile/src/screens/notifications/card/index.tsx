import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NotificationItem } from "../../../types/notifications";
import { MEMBERS_MOCK } from "../../../mocks/members";
import { PRIMARY_COLOR_RED } from "../../../theme/colors";
import styles from "./style";

interface Props {
  item: NotificationItem;
  onDelete?: () => void;
}

const NotificationCard: React.FC<Props> = ({ item, onDelete }) => {
  const actor = MEMBERS_MOCK.find((m) => m.id === item.actorId);
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.left}>
          <View style={styles.avatarWrap}>
            {actor?.avatar ? (
              <Image source={actor.avatar} style={styles.avatar} />
            ) : (
              <Ionicons name="person-outline" size={22} color="#9CA3AF" />
            )}
          </View>

          <View style={styles.textCol}>
            <Text style={styles.message} numberOfLines={2}>
              {item.messagePrefix}{" "}
              <Text style={styles.bold}>{item.highlight}</Text>
            </Text>

            <Text style={styles.time}>{item.timestamp}</Text>
          </View>
        </View>

        <Pressable
          onPress={onDelete}
          hitSlop={10}
          style={({ pressed }) => [
            styles.deleteBtn,
            pressed && { opacity: 0.7 },
          ]}
        >
          <Ionicons name="trash-outline" size={30} color={PRIMARY_COLOR_RED} />
        </Pressable>
      </View>

      <View style={styles.divider} />
    </View>
  );
};

export default NotificationCard;
