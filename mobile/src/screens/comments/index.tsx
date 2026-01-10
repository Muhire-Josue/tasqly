import React, { useMemo } from "react";
import { View, Text, Pressable, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import styles from "./style";
import MessageCard, { type CommentItem } from "./MessageCard";
import { COMMENTS_MOCK } from "../../mocks/comments";
import BottomTabBar from "../../components/BottomTabBar";

type Props = {
  onBack?: () => void;
  onEditComment?: (commentId: string) => void;
};

const Comments: React.FC<Props> = ({ onBack, onEditComment }) => {
  const commentCount = useMemo(() => COMMENTS_MOCK.length, []);

  return (
    <>
      <View style={styles.root}>
        <SafeAreaView
          edges={["top", "left", "right"]}
          style={styles.headerSafe}
        >
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

            <View style={styles.headerRightSpacer} />
          </View>

          <View style={styles.headerDivider} />
        </SafeAreaView>

        <FlatList
          data={COMMENTS_MOCK as CommentItem[]}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <MessageCard {...item} onEditComment={onEditComment} />
          )}
        />
      </View>
      <BottomTabBar activeTab="tasks" />
    </>
  );
};

export default Comments;
