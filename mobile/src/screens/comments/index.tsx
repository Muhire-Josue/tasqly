// screens/comments/index.tsx
import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  Pressable,
  FlatList,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { showMessage } from "react-native-flash-message";

import styles from "./style";
import MessageCard from "./MessageCard";
import { COMMENTS_MOCK } from "../../mocks/comments";
import type { CommentMessage, CommentsThread } from "../../types/comments";

type Props = {
  onBack?: () => void;
  onEditComment?: (commentId: string) => void;
};

type QueuedSend = {
  threadId: string;
  text: string;
  imageUri: string | null;
  createdAt: string;
};

const Comments: React.FC<Props> = ({ onBack, onEditComment }) => {
  // ✅ keep thread in state so we can append comments locally
  const [thread, setThread] = useState<CommentsThread>(COMMENTS_MOCK);

  // ✅ keep queued payloads for later backend call
  const [queuedSends, setQueuedSends] = useState<QueuedSend[]>([]);

  const commentCount = useMemo(
    () => thread.comments.length,
    [thread.comments.length],
  );
  const hasNotes = Boolean(thread.notes?.length);

  const [commentText, setCommentText] = useState("");
  const [pickedImageUri, setPickedImageUri] = useState<string | null>(null);

  const canSend = commentText.trim().length > 0 || Boolean(pickedImageUri);

  const formatTime = (d: Date) =>
    d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

  const handlePickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      showMessage({
        message: "Permission required to access photos",
        type: "warning",
        icon: "warning",
      });
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 0.9,
      allowsEditing: true,
    });

    if (!result.canceled) {
      setPickedImageUri(result.assets[0].uri);
      showMessage({
        message: "Image attached",
        type: "success",
        icon: "success",
      });
    }
  };

  const handleSend = () => {
    if (!canSend) return;

    const now = new Date();
    const createdAt = formatTime(now);

    // ✅ build new comment for local UI
    const newComment: CommentMessage = {
      id: `local-${now.getTime()}`,
      author: {
        id: "me",
        name: "Henry Smithson", // TODO: replace with logged-in user
        // avatar: ... (optional)
      },
      message: commentText.trim() || (pickedImageUri ? "📷" : ""),
      createdAt,
      isEditable: true,
      image: pickedImageUri ? { uri: pickedImageUri } : undefined, // ✅ matches ImageSourcePropType
    };

    // ✅ append to UI
    setThread((prev) => ({
      ...prev,
      comments: [...prev.comments, newComment],
    }));

    // ✅ store payload for backend later
    setQueuedSends((prev) => [
      ...prev,
      {
        threadId: thread.id,
        text: commentText.trim(),
        imageUri: pickedImageUri,
        createdAt,
      },
    ]);

    // reset input
    setCommentText("");
    setPickedImageUri(null);

    showMessage({
      message: newComment.image ? "Comment + image added" : "Comment added",
      type: "success",
      icon: "success",
    });
  };

  return (
    <View style={styles.root}>
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

          <View style={styles.headerRightSpacer} />
        </View>

        <View style={styles.headerDivider} />
      </SafeAreaView>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
      >
        <FlatList
          data={thread.comments}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <MessageCard {...item} onEditComment={onEditComment} />
          )}
          ListFooterComponent={
            <>
              {hasNotes ? (
                <View style={styles.notesWrap}>
                  {thread.notes!.map((note) => (
                    <View key={note.id} style={styles.noteRow}>
                      <Text style={styles.noteText}>
                        {note.text}{" "}
                        <Text style={styles.noteTime}>{note.createdAt}</Text>
                      </Text>
                    </View>
                  ))}
                </View>
              ) : (
                <View style={styles.notesSpacer} />
              )}
              <View style={{ height: 90 }} />
            </>
          }
        />

        <SafeAreaView edges={["bottom"]} style={styles.composerSafe}>
          {pickedImageUri ? (
            <View style={styles.attachmentRow}>
              <View style={styles.attachmentChip}>
                <Image
                  source={{ uri: pickedImageUri }}
                  style={styles.attachmentThumb}
                />
                <Text style={styles.attachmentText}>1 image attached</Text>
                <Pressable
                  onPress={() => setPickedImageUri(null)}
                  hitSlop={10}
                  style={({ pressed }) => [
                    styles.attachmentRemoveBtn,
                    pressed && { opacity: 0.7 },
                  ]}
                >
                  <Ionicons name="close" size={18} color="#111" />
                </Pressable>
              </View>
            </View>
          ) : null}

          <View style={styles.composerRow}>
            <View style={styles.inputWrap}>
              <TextInput
                value={commentText}
                onChangeText={setCommentText}
                placeholder="Add comment…"
                placeholderTextColor="#9CA3AF"
                style={styles.input}
                multiline={false}
                returnKeyType="send"
                onSubmitEditing={handleSend}
              />

              <Pressable
                onPress={handlePickImage}
                hitSlop={10}
                style={({ pressed }) => [
                  styles.clipBtn,
                  pressed && { opacity: 0.7 },
                ]}
              >
                <Ionicons name="attach" size={26} color="#111" />
              </Pressable>
            </View>

            <Pressable
              onPress={handleSend}
              disabled={!canSend}
              hitSlop={10}
              style={({ pressed }) => [
                styles.sendBtn,
                !canSend && { opacity: 0.35 },
                pressed && canSend && { opacity: 0.9 },
              ]}
            >
              <Ionicons name="paper-plane" size={26} color="#FFF" />
            </Pressable>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Comments;
