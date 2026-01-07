import React, { useState } from "react";
import { View, Text, Image, Pressable, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import styles from "./style";
import HouseImage from "../../assets/house.jpg";

const HouseSettings: React.FC = () => {
  const [houseImageUri, setHouseImageUri] = useState<string | null>(null);
  const [houseName, setHouseName] = useState("The Smith’s Home");

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

      <SafeAreaView edges={["left", "right"]} style={styles.safeArea}>
        <View style={styles.headerRow}>
          <Ionicons name="settings-outline" size={26} color="#111" />
          <Text style={styles.headerTitle}>House Settings</Text>
        </View>

        <Text style={styles.sectionTitle}>General</Text>

        <View style={styles.generalCard}>
          <View style={styles.generalHeaderRow}>
            <FontAwesome5 name="home" size={28} color="#111" />
            <Text style={styles.generalHeaderLabel}>House Name</Text>
          </View>

          <View style={styles.generalInputWrap}>
            <TextInput
              value={houseName}
              onChangeText={setHouseName}
              placeholder="House Name"
              placeholderTextColor="#9CA3AF"
              style={styles.generalInput}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HouseSettings;
