import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import BottomTabBar from "../../../components/common/BottomTabBar";
import Create from "../../../components/common/Create";

const CreateTask: React.FC = () => {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <Create />
        </ScrollView>
      </SafeAreaView>
      <BottomTabBar />
    </>
  );
};

export default CreateTask;
