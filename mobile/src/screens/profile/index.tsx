import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  Switch,
  TextInput,
  ScrollView,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { showMessage } from "react-native-flash-message";

import styles from "./style";
import Wellington from "../../assets/wellington.jpg";
import { PRIMARY_COLOR_BLUE } from "../../theme/colors";
import BottomTabBar from "../../components/BottomTabBar";
import { validateProfileForm } from "../../validators/profile";
import { useNavigateTo } from "../../navigation/useNavigateTo";

const Profile: React.FC = () => {
  const navigateTo = useNavigateTo();
  const [avatarUri, setAvatarUri] = useState<string | null>(null);

  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(true);

  const [name, setName] = useState("John Smith");
  const [email, setEmail] = useState("email@example.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [confirmDeleteVisible, setConfirmDeleteVisible] = useState(false);

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
    navigateTo("house-settings");
  };

  const handleDelete = () => {
    setConfirmDeleteVisible(true);
  };

  const confirmDelete = () => {
    setConfirmDeleteVisible(false);
    // TODO: backend call + logout / cleanup
  };

  const handleSave = () => {
    // TODO
    const errors = validateProfileForm(name, email, password, confirmPassword);

    if (errors.length > 0) {
      showMessage({
        message: errors[0],
        type: "danger",
        icon: "danger",
      });
      return;
    }

    showMessage({
      message: "Profile updated successfully",
      type: "success",
      icon: "success",
    });
    // hard reset
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <SafeAreaView edges={["top", "left", "right"]} style={styles.safeArea}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        >
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
            style={({ pressed }) => [
              styles.linkRow,
              pressed && { opacity: 0.9 },
            ]}
          >
            <View style={styles.linkLeft}>
              <Feather name="settings" size={24} color="#111" />
              <Text style={styles.linkLabel}>House Settings</Text>
            </View>

            <Ionicons name="chevron-forward" size={24} color="#9CA3AF" />
          </Pressable>

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

          <View style={styles.formSection}>
            <Text style={styles.fieldLabel}>Name</Text>
            <View style={styles.inputRow}>
              <Ionicons name="person-outline" size={24} color="#111" />
              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Ex: John Doe"
                placeholderTextColor="#9CA3AF"
                style={styles.input}
              />
            </View>

            <Text style={styles.fieldLabel}>Email</Text>
            <View style={styles.inputRow}>
              <Ionicons name="mail-outline" size={24} color="#111" />
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Ex: example@gmail.com"
                placeholderTextColor="#9CA3AF"
                autoCapitalize="none"
                keyboardType="email-address"
                style={styles.input}
              />
            </View>

            <Text style={styles.fieldLabel}>Change Password</Text>
            <View style={styles.inputRow}>
              <Ionicons name="lock-closed-outline" size={24} color="#111" />
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="**************"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={!showPassword}
                style={styles.input}
              />

              <Pressable
                onPress={() => setShowPassword((p) => !p)}
                hitSlop={10}
                style={({ pressed }) => [pressed && { opacity: 0.7 }]}
              >
                <Ionicons
                  name={showPassword ? "eye-off-outline" : "eye-outline"}
                  size={24}
                  color="#111"
                />
              </Pressable>
            </View>

            <Text style={styles.fieldLabel}>Confirm Password</Text>
            <View style={styles.inputRow}>
              <Ionicons name="lock-closed-outline" size={24} color="#111" />
              <TextInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="**************"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={!showPassword}
                style={styles.input}
              />

              <Pressable
                onPress={() => setShowPassword((p) => !p)}
                hitSlop={10}
                style={({ pressed }) => [pressed && { opacity: 0.7 }]}
              >
                <Ionicons
                  name={showPassword ? "eye-off-outline" : "eye-outline"}
                  size={24}
                  color="#111"
                />
              </Pressable>
            </View>
          </View>

          <View style={styles.buttonsRow}>
            <Pressable
              onPress={handleDelete}
              style={({ pressed }) => [
                styles.dangerButton,
                pressed && { opacity: 0.9 },
              ]}
            >
              <Ionicons name="trash-outline" size={22} color="#FFF" />
              <Text style={styles.dangerButtonText}>Delete</Text>
            </Pressable>

            <Pressable
              onPress={handleSave}
              style={({ pressed }) => [
                styles.primaryButton,
                pressed && { opacity: 0.9 },
              ]}
            >
              <Ionicons
                name="checkmark-circle-outline"
                size={24}
                color="#FFF"
              />
              <Text style={styles.primaryButtonText}>Save</Text>
            </Pressable>
          </View>
        </ScrollView>

        {/* Confirm Delete Modal */}
        <Modal
          visible={confirmDeleteVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setConfirmDeleteVisible(false)}
        >
          <Pressable
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.35)",
              justifyContent: "center",
              paddingHorizontal: 24,
            }}
            onPress={() => setConfirmDeleteVisible(false)}
          >
            <Pressable
              onPress={() => {}}
              style={{
                backgroundColor: "#FFF",
                borderRadius: 18,
                padding: 18,
                borderWidth: 1,
                borderColor: "#E5E7EB",
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "700", color: "#111" }}>
                Confirm deletion
              </Text>
              <Text style={{ marginTop: 8, fontSize: 14, color: "#6B7280" }}>
                Are you sure you want to delete your account? This action cannot
                be undone.
              </Text>

              <View style={{ flexDirection: "row", gap: 12, marginTop: 16 }}>
                <Pressable
                  onPress={() => setConfirmDeleteVisible(false)}
                  style={({ pressed }) => [
                    {
                      flex: 1,
                      paddingVertical: 12,
                      borderRadius: 14,
                      borderWidth: 1,
                      borderColor: "#D1D5DB",
                      backgroundColor: "#FFF",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                      gap: 8,
                    },
                    pressed && { opacity: 0.9 },
                  ]}
                >
                  <Ionicons name="close" size={18} color="#111" />
                  <Text
                    style={{ fontSize: 15, fontWeight: "700", color: "#111" }}
                  >
                    Cancel
                  </Text>
                </Pressable>

                <Pressable
                  onPress={confirmDelete}
                  style={({ pressed }) => [
                    {
                      flex: 1,
                      paddingVertical: 12,
                      borderRadius: 14,
                      backgroundColor: "#C0392B",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                      gap: 8,
                    },
                    pressed && { opacity: 0.9 },
                  ]}
                >
                  <Ionicons name="trash-outline" size={18} color="#FFF" />
                  <Text
                    style={{ fontSize: 15, fontWeight: "800", color: "#FFF" }}
                  >
                    Delete
                  </Text>
                </Pressable>
              </View>
            </Pressable>
          </Pressable>
        </Modal>
      </SafeAreaView>

      <BottomTabBar activeTab="profile" />
    </>
  );
};

export default Profile;
