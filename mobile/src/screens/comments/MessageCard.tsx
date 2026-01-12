// screens/comments/MessageCard.tsx
import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./style";
import type { CommentMessage } from "../../types/comments";

type Props = CommentMessage & {
  onEditComment?: (commentId: string) => void;
};

const MessageCard: React.FC<Props> = ({
  id,
  author,
  createdAt,
  message,
  isEditable,
  image,
  onEditComment,
}) => {
  const hasText = Boolean(message && message.trim().length > 0);
  const hasImage = Boolean(image);

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
          <View
            style={[
              styles.bubble,
              // ✅ if image-only, make bubble wider so image doesn’t become a thin strip
              !hasText && hasImage && styles.bubbleImageOnly,
            ]}
          >
            {hasText ? <Text style={styles.bubbleText}>{message}</Text> : null}

            {hasImage ? (
              <Image
                source={image}
                style={styles.bubbleImage}
                resizeMode="cover"
              />
            ) : null}
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
