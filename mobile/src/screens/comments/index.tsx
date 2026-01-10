import React from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import styles from "./style";

const CommentsScreen: React.FC = () => {
  const commentsCount = 7;

  return (
    <View style={styles.root}>
      {/* HEADER */}
      <SafeAreaView edges={["top"]} style={styles.headerSafe}>
        <View style={styles.headerRoot}>
          <Pressable
            onPress={() => {
              // TODO: navigation.goBack()
            }}
            hitSlop={10}
            style={({ pressed }) => [
              styles.backButton,
              pressed && { opacity: 0.6 },
            ]}
          >
            <Ionicons name="chevron-back" size={28} color="#111" />
          </Pressable>

          <Text style={styles.headerTitle}>{commentsCount} comments</Text>

          <View style={styles.rightSpacer} />
        </View>
      </SafeAreaView>

      {/* rest of screen */}
    </View>
  );
};

export default CommentsScreen;
