import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";
import { NotificationItem } from "../../../types/notifications";
import { MEMBERS_MOCK } from "../../../mocks/members";

type Decision = "pending" | "accepted" | "declined";

interface Props {
  item: NotificationItem;
  decision: Decision;
  showActions: boolean;
  onAccept: () => void;
  onDecline: () => void;
  onDelete?: () => void;
}

const NotificationCard: React.FC<Props> = ({
  item,
  decision,
  showActions,
  onAccept,
  onDecline,
  onDelete,
}) => {
  const actor = MEMBERS_MOCK.find((m) => m.id === item.actorId);

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.left}>
          <View style={styles.avatarWrap}>
            {actor?.avatar ? (
              <Image source={actor.avatar} style={styles.avatar} />
            ) : (
              <Ionicons name="person-outline" size={18} color="#888" />
            )}
          </View>

          <View style={styles.textCol}>
            <Text style={styles.message}>
              {item.messagePrefix}{" "}
              <Text style={styles.bold}>{item.highlight}</Text>
            </Text>

            <Text style={styles.time}>{item.timestamp}</Text>

            {!showActions && decision !== "pending" && (
              <Text style={styles.decisionText}>
                {decision === "accepted" ? "Accepted" : "Declined"}
              </Text>
            )}
          </View>
        </View>

        {!!onDelete && (
          <Pressable
            onPress={onDelete}
            hitSlop={10}
            style={({ pressed }) => pressed && { opacity: 0.6 }}
          >
            <Ionicons name="trash-outline" size={20} color="#111" />
          </Pressable>
        )}
      </View>

      {showActions && (
        <View style={styles.actionsRow}>
          <Pressable style={styles.declineBtn} onPress={onDecline}>
            <Text style={styles.declineText}>Decline</Text>
          </Pressable>

          <Pressable style={styles.acceptBtn} onPress={onAccept}>
            <Text style={styles.acceptText}>Accept</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default NotificationCard;
