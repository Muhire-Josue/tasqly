import React, { useState } from "react";
import { ScrollView, Text, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import BottomTabBar from "../../../components/BottomTabBar";
import Create from "../../../components/Create";
import { Ionicons } from "@expo/vector-icons";
import { useNavigateTo } from "../../../navigation/useNavigateTo";

const CreateRepair: React.FC = () => {
  const navigate = useNavigateTo();
  const [reset, setReset] = useState(false);

  const handleCancel = () => {
    navigate("repair-list");
    setReset(true);
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.headerRow}>
              <Text style={styles.title}>Create a Repair</Text>

              <Pressable
                style={({ pressed }) => [
                  styles.cancelButton,
                  pressed && { opacity: 0.9 },
                ]}
                onPress={handleCancel}
              >
                <Ionicons
                  name="close-circle-outline"
                  size={30}
                  color="#FFFFFF"
                  style={{ marginRight: 6 }}
                />
                <Text style={styles.cancelText}>Cancel</Text>
              </Pressable>
            </View>

            <Create reset={reset} type={"repair"} />
          </ScrollView>
        </View>
      </SafeAreaView>
      <BottomTabBar />
    </>
  );
};

export default CreateRepair;
