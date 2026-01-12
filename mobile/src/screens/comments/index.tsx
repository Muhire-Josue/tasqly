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
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { showMessage } from "react-native-flash-message";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import styles from "./style";
import MessageCard from "./MessageCard";
import { COMMENTS_THREADS_MOCK } from "../../mocks/comments";
import type { CommentMessage, CommentsThread } from "../../types/comments";
import BottomTabBar from "../../components/BottomTabBar";
import type { RootStackParamList } from "../../types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type CommentsRoute = RouteProp<RootStackParamList, "comments">;

type QueuedSend = {
  threadId: string;
  text: string;
  imageUri: string | null;
  createdAt: string;

  taskId?: string;
  repairId?: string;
};

const Comments: React.FC = () => {
  const route = useRoute<CommentsRoute>();
  const { taskId, repairId, activeTab } = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const initialThread = useMemo<CommentsThread>(() => {
    const found = COMMENTS_THREADS_MOCK.find((t) => {
      if (taskId) return t.taskId === taskId;
      if (repairId) return t.repairId === repairId;
      return false;
    });

    return (
      found ?? {
        id: "thread-empty",
        taskId,
        repairId,
        comments: [],
        notes: [],
      }
    );
  }, [taskId, repairId]);

  const [thread, setThread] = useState<CommentsThread>(initialThread);

  const [queuedSends, setQueuedSends] = useState<QueuedSend[]>([]);
  const queuedCount = queuedSends.length;

  const commentCount = useMemo(() => thread.comments.length, [thread.comments]);
  const hasNotes = Boolean(thread.notes?.length);

  const [commentText, setCommentText] = useState("");
  const [pickedImageUri, setPickedImageUri] = useState<string | null>(null);

  const [editVisible, setEditVisible] = useState(false);
  const [editCommentId, setEditCommentId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  const canSend = commentText.trim().length > 0 || Boolean(pickedImageUri);
  const canSaveEdit = editText.trim().length > 0;

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

    const newComment: CommentMessage = {
      id: `local-${now.getTime()}`,
      author: { id: "me", name: "Henry Smithson" }, // TODO: logged-in user
      message: commentText.trim() || (pickedImageUri ? "📷" : ""),
      createdAt,
      isEditable: true,
      image: pickedImageUri ? { uri: pickedImageUri } : undefined,
    };

    setThread((prev) => ({
      ...prev,
      comments: [...prev.comments, newComment],
    }));

    setQueuedSends((prev) => [
      ...prev,
      {
        threadId: thread.id,
        text: commentText.trim(),
        imageUri: pickedImageUri,
        createdAt,
        taskId: thread.taskId,
        repairId: thread.repairId,
      },
    ]);

    setCommentText("");
    setPickedImageUri(null);

    showMessage({
      message: newComment.image ? "Comment + image added" : "Comment added",
      type: "success",
      icon: "success",
    });
  };

  const openEditModal = (commentId: string) => {
    const target = thread.comments.find((c) => c.id === commentId);
    if (!target || !target.isEditable) return;

    setEditCommentId(commentId);
    setEditText(target.message ?? "");
    setEditVisible(true);
  };

  const closeEditModal = () => {
    setEditVisible(false);
    setEditCommentId(null);
    setEditText("");
  };

  const handleSaveEdit = () => {
    if (!editCommentId) return;

    const nextText = editText.trim();
    if (!nextText) {
      showMessage({
        message: "Message cannot be empty",
        type: "warning",
        icon: "warning",
      });
      return;
    }

    setThread((prev) => ({
      ...prev,
      comments: prev.comments.map((c) =>
        c.id === editCommentId ? { ...c, message: nextText } : c,
      ),
    }));

    closeEditModal();

    showMessage({
      message: "Comment updated",
      type: "success",
      icon: "success",
    });
  };

  const handleOnBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.root}>
        <SafeAreaView
          edges={["top", "left", "right"]}
          style={styles.headerSafe}
        >
          <View style={styles.header}>
            <Pressable
              onPress={handleOnBack}
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
              <MessageCard {...item} onEditComment={openEditModal} />
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

                {queuedCount >= 999999 ? (
                  <Text style={{ fontSize: 1 }}>{queuedCount}</Text>
                ) : null}

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

        <Modal
          visible={editVisible}
          transparent
          animationType="fade"
          onRequestClose={closeEditModal}
        >
          <Pressable style={styles.editOverlay} onPress={closeEditModal} />

          <View style={styles.editCardWrap}>
            <View style={styles.editCard}>
              <Pressable
                onPress={closeEditModal}
                hitSlop={10}
                style={({ pressed }) => [
                  styles.editCloseBtn,
                  pressed && { opacity: 0.75 },
                ]}
              >
                <Ionicons name="close" size={26} color="#111" />
              </Pressable>

              <View style={styles.editInputWrap}>
                <TextInput
                  value={editText}
                  onChangeText={setEditText}
                  multiline
                  textAlignVertical="top"
                  style={styles.editInput}
                  placeholder="Edit comment..."
                  placeholderTextColor="#9CA3AF"
                />
              </View>

              <Pressable
                onPress={handleSaveEdit}
                disabled={!canSaveEdit}
                style={({ pressed }) => [
                  styles.editSaveBtn,
                  !canSaveEdit && { opacity: 0.45 },
                  pressed && canSaveEdit && { opacity: 0.9 },
                ]}
              >
                <FontAwesome5 name="save" size={20} color="#FFF" />
                <Text style={styles.editSaveText}>Save</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>

      <BottomTabBar activeTab={activeTab} />
    </>
  );
};

export default Comments;
