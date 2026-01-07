// screens/profile/index.tsx
import React, { useState } from "react";
import { View, Text, Image, Pressable, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import styles from "./style";
import Wellington from "../../assets/wellington.jpg";
import { PRIMARY_COLOR_BLUE } from "../../theme/colors";

const Profile: React.FC = () => {
  const [avatarUri, setAvatarUri] = useState<string | null>(null);

  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(true);

  const handleChangePhoto = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 0.8,
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!result.canceled) setAvatarUri(result.assets[0].uri);
  };

  const handleHouseSettingsPress = () => {
    // TODO: navigate to House Settings screen
  };

  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.avatarSection}>
          <Pressable
            onPress={handleChangePhoto}
            style={({ pressed }) => [
              styles.avatarPressable,
              pressed && { opacity: 0.9 },
            ]}
            hitSlop={10}
          >
            <Image
              source={avatarUri ? { uri: avatarUri } : Wellington}
              style={styles.avatar}
            />
            <View style={styles.cameraBadge}>
              <Ionicons name="camera" size={18} color="#111" />
            </View>
          </Pressable>
        </View>

        <Text style={styles.headerTitle}>Profile</Text>

        <Pressable
          onPress={handleHouseSettingsPress}
          style={({ pressed }) => [styles.linkRow, pressed && { opacity: 0.9 }]}
        >
          <View style={styles.linkLeft}>
            <Feather name="settings" size={24} color="#111" />
            <Text style={styles.linkLabel}>House Settings</Text>
          </View>

          <Ionicons name="chevron-forward" size={24} color="#9CA3AF" />
        </Pressable>

        {/* Notification settings */}
        <View style={styles.settingRow}>
          <View style={styles.settingLeft}>
            <Ionicons name="notifications-outline" size={26} color="#111" />
            <Text style={styles.settingLabel}>Push Notification</Text>
          </View>

          <Switch
            value={pushEnabled}
            onValueChange={setPushEnabled}
            trackColor={{ false: "#D1D5DB", true: PRIMARY_COLOR_BLUE }}
            thumbColor="#FFFFFF"
          />
        </View>

        <View style={styles.settingRow}>
          <View style={styles.settingLeft}>
            <Ionicons name="notifications-outline" size={26} color="#111" />
            <Text style={styles.settingLabel}>Email Notification</Text>
          </View>

          <Switch
            value={emailEnabled}
            onValueChange={setEmailEnabled}
            trackColor={{ false: "#D1D5DB", true: PRIMARY_COLOR_BLUE }}
            thumbColor="#FFFFFF"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
