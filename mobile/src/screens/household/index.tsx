import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import styles from "./style";
import HouseImage from "../../assets/house.jpg";

const HouseSettings: React.FC = () => {
  const [houseImageUri, setHouseImageUri] = useState<string | null>(null);

  const handleChangeHouseImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 0.9,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.canceled) {
      setHouseImageUri(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.root}>
      {/* 🔥 Image goes full-bleed to top */}
      <View style={styles.imageWrapper}>
        <Image
          source={houseImageUri ? { uri: houseImageUri } : HouseImage}
          style={styles.houseImage}
        />

        <Pressable
          onPress={handleChangeHouseImage}
          hitSlop={10}
          style={({ pressed }) => [
            styles.editBadge,
            pressed && { opacity: 0.8 },
          ]}
        >
          <Ionicons name="pencil" size={18} color="#FFF" />
        </Pressable>
      </View>

      {/* Safe content below image */}
      <SafeAreaView edges={["left", "right"]} style={styles.safeArea}>
        {/* Header */}
        <View style={styles.headerRow}>
          <Ionicons name="settings-outline" size={26} color="#111" />
          <Text style={styles.headerTitle}>House Settings</Text>
        </View>

        {/* next sections go here */}
      </SafeAreaView>
    </View>
  );
};

export default HouseSettings;
