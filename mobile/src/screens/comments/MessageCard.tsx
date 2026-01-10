import React from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./style";

export type CommentItem = {
  id: string;
  author: {
    name: string;
    avatar?: ImageSourcePropType; // or ImageSourcePropType if you prefer
  };
  createdAt: string;
  message: string;
  isEditable?: boolean;
};

type Props = CommentItem & {
  onEditComment?: (commentId: string) => void;
};

const MessageCard: React.FC<Props> = ({
  id,
  author,
  createdAt,
  message,
  isEditable,
  onEditComment,
}) => {
  return (
    <View style={styles.commentRow}>
      {/* Avatar */}
      <View style={styles.avatarWrap}>
        {author.avatar ? (
          <Image source={author.avatar} style={styles.avatarImg} />
        ) : (
          <View style={styles.avatarPlaceholder}>
            <Ionicons name="person-outline" size={22} color="#9CA3AF" />
          </View>
        )}
      </View>

      {/* Main */}
      <View style={styles.commentMain}>
        <View style={styles.nameTimeRow}>
          <Text style={styles.authorName}>{author.name}</Text>
          <Text style={styles.timeText}>{createdAt}</Text>
        </View>

        <View style={styles.bubbleRow}>
          <View style={styles.bubble}>
            <Text style={styles.bubbleText}>{message}</Text>
          </View>

          {isEditable ? (
            <Pressable
              onPress={() => onEditComment?.(id)}
              hitSlop={10}
              style={({ pressed }) => [
                styles.editBtn,
                pressed && { opacity: 0.7 },
              ]}
            >
              <Ionicons name="pencil-outline" size={22} color="#111" />
            </Pressable>
          ) : (
            <View style={styles.editBtnSpacer} />
          )}
        </View>
      </View>
    </View>
  );
};

export default MessageCard;
