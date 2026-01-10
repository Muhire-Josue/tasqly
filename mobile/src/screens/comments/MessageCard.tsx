import React, { useMemo } from "react";
import { View, Text, Pressable, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { COMMENTS_MOCK } from "../../mocks/comments";
import styles from "./style";

type Props = {
  onBack?: () => void;
  onEditComment?: (commentId: string) => void;
};

const CommentsScreen: React.FC<Props> = ({ onBack, onEditComment }) => {
  const commentCount = useMemo(() => COMMENTS_MOCK.length, []);

  // ✅ "separate card" but still in the same file (not reused elsewhere)
  const MessageCard = ({
    id,
    author,
    createdAt,
    message,
    isEditable,
  }: (typeof COMMENTS_MOCK)[number]) => {
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
          {/* Name + time row */}
          <View style={styles.nameTimeRow}>
            <Text style={styles.authorName}>{author.name}</Text>
            <Text style={styles.timeText}>{createdAt}</Text>
          </View>

          {/* Bubble + optional edit */}
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

  return (
    <View style={styles.root}>
      {/* Header */}
      <SafeAreaView edges={["top", "left", "right"]} style={styles.headerSafe}>
        <View style={styles.header}>
          <Pressable
            onPress={onBack}
            hitSlop={10}
            style={({ pressed }) => [
              styles.backBtn,
              pressed && { opacity: 0.7 },
            ]}
          >
            <Ionicons name="chevron-back" size={28} color="#111" />
          </Pressable>

          <Text style={styles.headerTitle}>{commentCount} comments</Text>

          {/* Spacer to keep title centered */}
          <View style={styles.headerRightSpacer} />
        </View>

        <View style={styles.headerDivider} />
      </SafeAreaView>

      {/* Body */}
      <FlatList
        data={COMMENTS_MOCK}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => <MessageCard {...item} />}
      />
    </View>
  );
};

export default CommentsScreen;
