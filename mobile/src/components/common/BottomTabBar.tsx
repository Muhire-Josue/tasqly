// src/components/common/BottomTabBar.tsx
import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "../style/bottomTabBar";
import { PRIMARY_COLOR_BLUE } from "../../theme/colors";

type TabKey = "tasks" | "repair" | "notifications" | "profile";

const TABS: {
  key: TabKey;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  badge?: number;
}[] = [
  { key: "tasks", label: "Tasks", icon: "list-outline" },
  { key: "repair", label: "Repair", icon: "hammer-outline" },
  {
    key: "notifications",
    label: "Notifications",
    icon: "notifications-outline",
    badge: 9,
  },
  { key: "profile", label: "Profile", icon: "person-circle" },
];

const BottomTabBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("tasks");
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: insets.bottom || 8 },
      ]}
    >
      {TABS.map(({ key, label, icon, badge }) => {
        const isActive = activeTab === key;

        return (
          <Pressable
            key={key}
            style={({ pressed }) => [
              styles.tabItem,
              pressed && styles.tabItemPressed,
            ]}
            onPress={() => setActiveTab(key)}
          >
            <View style={styles.iconWrapper}>
              <Ionicons
                name={icon}
                size={36}
                color={isActive ? PRIMARY_COLOR_BLUE : "#000"}
              />
              {badge !== undefined && badge > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{badge}</Text>
                </View>
              )}
            </View>
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default BottomTabBar;
