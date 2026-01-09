import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import Ben from "../../../assets/ben.jpg";

import styles from "./style";

type Props = {
  userName?: string;
  onJoinPress?: () => void;
  onCreatePress?: () => void;
};

const NoContentHousehold: React.FC<Props> = ({
  userName = "John",
  onJoinPress,
  onCreatePress,
}) => {
  return (
    <SafeAreaView style={styles.noHouseSafe} edges={["top", "left", "right"]}>
      <View style={styles.noHouseRoot}>
        <View style={styles.noHouseTopRow}>
          <View style={styles.noHouseTopLeft}>
            <View style={styles.noHouseAvatarCircle}>
              <Image source={Ben} style={styles.noHouseAvatarImage} />
            </View>

            <Text style={styles.noHouseGreeting}>Hi {userName}</Text>
          </View>

          <Pressable
            onPress={onCreatePress}
            hitSlop={10}
            style={({ pressed }) => [
              styles.noHousePlusBtn,
              pressed && { opacity: 0.85 },
            ]}
          >
            <Ionicons name="add" size={26} color="#111" />
          </Pressable>
        </View>

        {/* Center content */}
        <View style={styles.noHouseCenter}>
          <View style={styles.noHouseIconCircle}>
            <Ionicons name="home" size={90} color="#FFF" />
          </View>

          <Text style={styles.noHouseTitle}>No Household to show</Text>
          <Text style={styles.noHouseSubtitle}>
            Click the button below to join a household
          </Text>

          <Pressable
            onPress={onJoinPress}
            style={({ pressed }) => [
              styles.noHouseJoinBtn,
              pressed && { opacity: 0.9 },
            ]}
          >
            <FontAwesome5 name="user-friends" size={22} color="#FFF" />
            <Text style={styles.noHouseJoinText}>Join</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NoContentHousehold;
