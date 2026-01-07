import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import Wellington from "../../assets/wellington.jpg";
import styles from "./style";
const Profile: React.FC = () => {
  const [avatar, setAvatar] = useState<string | null>(null);

  const handleChangePhoto = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 0.8,
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {/* Avatar */}
      <View style={styles.avatarWrapper}>
        <Image
          source={avatar ? { uri: avatar } : Wellington}
          style={styles.avatar}
        />

        <Pressable style={styles.cameraButton} onPress={handleChangePhoto}>
          <Ionicons name="camera-outline" size={20} color="#111" />
        </Pressable>
      </View>

      {/* Name */}
      <Text style={styles.name}>John Smith</Text>
    </View>
  );
};

export default Profile;
