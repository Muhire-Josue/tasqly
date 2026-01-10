import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { HOUSE_MOCK } from "../../../mocks/house";
import styles from "./joinHouseSuccessStyle";
import BottomTabBar from "../../../components/BottomTabBar";

type Props = {
  houseName?: string;
  houseImage?: ImageSourcePropType;
  onGoHome?: () => void;
};

const JoinHouseSuccess: React.FC<Props> = ({
  houseName = "Riverside Apartment",
  houseImage = HOUSE_MOCK.image,
  onGoHome,
}) => {
  return (
    <>
    <View style={styles.root}>
      <View style={styles.imageWrapper}>
        <Image source={houseImage} style={styles.houseImage} />
      </View>

      <SafeAreaView edges={["left", "right"]} style={styles.safeArea}>
        <Text style={styles.houseName}>{houseName}</Text>

        <View style={styles.successCard}>
          <View style={styles.checkCircle}>
            <Ionicons name="checkmark" size={44} color="#FFF" />
          </View>

          <Text style={styles.successTitle}>
            You&apos;ve joined the household! 🎉
          </Text>

          <Text style={styles.successSubtitle}>
            Welcome aboard, you can now view tasks, repairs, and household
            activity.
          </Text>

          <Pressable
            onPress={onGoHome}
            style={({ pressed }) => [
              styles.goHomeBtn,
              pressed && { opacity: 0.9 },
            ]}
          >
            <Ionicons name="home" size={22} color="#FFF" />
            <Text style={styles.goHomeText}>Go to Home</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
    <BottomTabBar activeTab="profile" />
    </>
  );
};

export default JoinHouseSuccess;
