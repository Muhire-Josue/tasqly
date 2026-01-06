import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./style/bottomTabBar";
import { PRIMARY_COLOR_BLUE } from "../theme/colors";
import { useNavigateTo } from "../navigation/useNavigateTo";

type TabKey = "tasks" | "repair" | "notifications" | "profile";

interface BottomTabBarProps {
  activeTab: TabKey; // ✅ keep it consistent with TabKey
}

type TabConfig =
  | {
      key: Exclude<TabKey, "profile">;
      label: string;
      icon: keyof typeof FontAwesome6.glyphMap;
      badge?: number;
      library: "fa6";
    }
  | {
      key: "profile";
      label: string;
      icon: keyof typeof Ionicons.glyphMap;
      badge?: number;
      library: "ion";
    };

const TABS: TabConfig[] = [
  { key: "tasks", label: "Tasks", icon: "list-check", library: "fa6" },
  { key: "repair", label: "Repair", icon: "hammer", library: "fa6" },
  {
    key: "notifications",
    label: "Notifications",
    icon: "bell",
    badge: 9,
    library: "fa6",
  },
  {
    key: "profile",
    label: "Profile",
    icon: "person-circle",
    library: "ion",
  },
];

const BottomTabBar: React.FC<BottomTabBarProps> = ({ activeTab }) => {
  const navigateTo = useNavigateTo();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom || 8 }]}>
      {TABS.map(({ key, label, icon, badge, library }) => {
        const isActive = activeTab === key;

        return (
          <Pressable
            key={key}
            style={({ pressed }) => [
              styles.tabItem,
              pressed && styles.tabItemPressed,
            ]}
            onPress={() => {
              // ✅ no setActiveTab here (parent controls activeTab)

              switch (key) {
                case "tasks":
                  navigateTo("task-list");
                  break;

                case "repair":
                  navigateTo("repair-list");
                  break;

                case "notifications":
                  navigateTo("repair-list");
                  break;

                case "profile":
                  navigateTo("repair-list");
                  break;
              }
            }}
          >
            <View style={styles.iconWrapper}>
              {library === "fa6" ? (
                <FontAwesome6
                  name={icon}
                  size={35}
                  color={isActive ? PRIMARY_COLOR_BLUE : "#000"}
                />
              ) : (
                <Ionicons
                  name={icon}
                  size={35}
                  color={isActive ? PRIMARY_COLOR_BLUE : "#000"}
                />
              )}

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
