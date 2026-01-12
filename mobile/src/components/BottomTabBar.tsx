import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./style/bottomTabBar";
import { PRIMARY_COLOR_BLUE } from "../theme/colors";
import { useNavigateTo } from "../navigation/useNavigateTo";
import { TabKey, TABS } from "../types/bottomTabBar";

interface BottomTabBarProps {
  activeTab: TabKey;
}

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
              switch (key) {
                case "tasks":
                  navigateTo("task-list");
                  break;

                case "repairs":
                  navigateTo("repair-list");
                  break;

                case "notifications":
                  navigateTo("notification");
                  break;

                case "profile":
                  navigateTo("profile");
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
