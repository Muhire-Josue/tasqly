import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Stats from "../../../components/common/Stats";
import HeaderInfo from "../../../components/common/HeaderInfo";

const TaskList: React.FC = () => {
  return (
    <View style={styles.container}>
      <HeaderInfo />
      <Stats />
    </View>
  );
};

export default TaskList;
