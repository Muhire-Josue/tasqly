import React from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import BottomTabBar from "../../components/BottomTabBar";

const Notification: React.FC = () => {
  return (
    <>
      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        <View style={styles.container}>
          {/* HEADER */}
          <View style={styles.headerRow}>
            <Text style={styles.title}>Notifications</Text>

            <Pressable
              hitSlop={10}
              style={({ pressed }) => [pressed && styles.iconPressed]}
              onPress={() => {
                console.log("Open filter");
              }}
            >
              <Ionicons name="filter-outline" size={35} color="#111" />
            </Pressable>
          </View>

          {/* CONTENT (empty for now) */}
          <View style={styles.content} />
        </View>
      </SafeAreaView>

      <BottomTabBar activeTab="notifications" />
    </>
  );
};

export default Notification;
