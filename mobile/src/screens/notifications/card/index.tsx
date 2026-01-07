import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";
import { NotificationItem } from "../../../types/notifications";
import { MEMBERS_MOCK } from "../../../mocks/members";
import { PRIMARY_COLOR_RED } from "../../../theme/colors";

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
  const actor = MEMBERS_MOCK.find((m) => m.id === item.createdBy);

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

            {showActions ? (
              <View style={styles.actionsRow}>
                <Pressable
                  style={({ pressed }) => [
                    styles.declineBtn,
                    pressed && { opacity: 0.9 },
                  ]}
                  onPress={onDecline}
                >
                  <Ionicons
                    name="close-circle-outline"
                    size={18}
                    color="#FFFFFF"
                    style={{ marginRight: 8 }}
                  />
                  <Text style={styles.declineText}>Decline</Text>
                </Pressable>

                <Pressable
                  style={({ pressed }) => [
                    styles.acceptBtn,
                    pressed && { opacity: 0.9 },
                  ]}
                  onPress={onAccept}
                >
                  <Ionicons
                    name="checkmark-circle-outline"
                    size={18}
                    color="#FFFFFF"
                    style={{ marginRight: 8 }}
                  />
                  <Text style={styles.acceptText}>Accept</Text>
                </Pressable>
              </View>
            ) : (
              <>
                <Text style={styles.time}>{item.timestamp}</Text>

                {decision !== "pending" && (
                  <Text style={styles.decisionText}>
                    {decision === "accepted" ? "Accepted" : "Declined"}
                  </Text>
                )}
              </>
            )}
          </View>
        </View>

        {!!onDelete && (
          <Pressable
            onPress={onDelete}
            hitSlop={10}
            style={({ pressed }) => [
              styles.deleteBtn,
              pressed && { opacity: 0.6 },
            ]}
          >
            <Ionicons
              name="trash-outline"
              size={22}
              color={PRIMARY_COLOR_RED}
            />
          </Pressable>
        )}
      </View>

      <View style={styles.divider} />
    </View>
  );
};

export default NotificationCard;
