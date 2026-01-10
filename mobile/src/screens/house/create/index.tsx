import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ImageBackground,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import styles from "./style";
import BgImage from "../../../assets/Image-Icon.jpg";

const CreateHouse: React.FC = () => {
  const [houseImageUri, setHouseImageUri] = useState<string | null>(null);
  const [houseName, setHouseName] = useState("");
  const [description, setDescription] = useState("");

  const handleUploadHouseImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 0.9,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.canceled) setHouseImageUri(result.assets[0].uri);
  };

  return (
    <View style={styles.root}>
      <View style={styles.imageSection}>
        <ImageBackground
          source={houseImageUri ? { uri: houseImageUri } : BgImage}
          style={styles.imageBackground}
          resizeMode="cover"
        >
          {/* Dark overlay */}
          <View style={styles.imageOverlay} />

          {/* Upload button */}
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
        </ImageBackground>
      </View>

      <SafeAreaView edges={["left", "right"]} style={styles.safeArea}>
        <Text style={styles.title}>Create new House</Text>
        {/* House Name */}
        <Text style={styles.formLabel}>House Name</Text>

        <View style={styles.inputRow}>
          <Ionicons name="home" size={26} color="#111" />
          <TextInput
            value={houseName}
            onChangeText={setHouseName}
            placeholder="Ex: Rideau Apartment"
            placeholderTextColor="#9CA3AF"
            style={styles.input}
          />
        </View>

        {/* Description */}
        <View style={styles.descHeaderRow}>
          <Ionicons name="information-circle-outline" size={26} color="#111" />
          <Text style={styles.descLabel}>Description</Text>
        </View>

        <View style={styles.textareaWrap}>
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder=""
            placeholderTextColor="#9CA3AF"
            style={styles.textarea}
            multiline
            textAlignVertical="top"
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CreateHouse;
