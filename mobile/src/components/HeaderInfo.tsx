import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import styles from "./style/headerInfo";
import ben from "../assets/ben.jpg";
import { useNavigateTo } from "../navigation/useNavigateTo";

interface HeaderProps {
  type: "task" | "repair";
}

const HeaderInfo: React.FC<HeaderProps> = ({ type }) => {
  const navigateTo = useNavigateTo();
  return (
    <>
      <View style={styles.headerRow}>
        <View style={styles.userRow}>
          <Image source={ben} style={styles.avatar} />
          <Text style={styles.greetingText}>Hi John</Text>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.addButton,
            pressed && styles.addButtonPressed,
          ]}
          onPress={() =>
            type === "task"
              ? navigateTo("create-task")
              : navigateTo("create-repair")
          }
        >
          <Ionicons name="add" size={36} color="#000" />
        </Pressable>
      </View>

      <View style={styles.homeRow}>
        <FontAwesome name="home" size={30} color="#000" />
        <Text style={styles.homeText}>The Smith&apos;s Home</Text>
      </View>
    </>
  );
};

export default HeaderInfo;
