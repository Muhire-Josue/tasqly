import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import styles from "./style";

const CreateHouse: React.FC = () => {
  const [houseImageUri, setHouseImageUri] = useState<string | null>(null);

  const handleUploadHouseImage = async () => {
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
      {/* Image area (touch-safe, full width, top of screen) */}
      <View style={styles.imageArea}>
        {houseImageUri ? (
          <Image source={{ uri: houseImageUri }} style={styles.houseImage} />
        ) : (
          <View style={styles.imagePlaceholder} />
        )}

        <Pressable
          onPress={handleUploadHouseImage}
          hitSlop={10}
          style={({ pressed }) => [
            styles.uploadBtn,
            pressed && { opacity: 0.9 },
          ]}
        >
          <Ionicons name="pencil" size={18} color="#FFF" />
          <Text style={styles.uploadText}>Upload</Text>
        </Pressable>
      </View>

      {/* Header */}
      <SafeAreaView edges={["left", "right"]} style={styles.safeArea}>
        <Text style={styles.title}>Create new House</Text>
      </SafeAreaView>
    </View>
  );
};

export default CreateHouse;
