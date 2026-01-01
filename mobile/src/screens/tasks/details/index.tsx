import React from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import styles from "./styles";

// Adjust this type to match your navigator params
type TaskDetailsRouteParams = {
  taskTitle: string;
};

const TaskDetails: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const route = useRoute<any>(); // or useRoute<RouteProp<RootStackParamList, "task-details">>()
  const { taskTitle } = (route.params as TaskDetailsRouteParams) || {
    taskTitle: "Take out plastic trash",
  };

  const handleEditPress = () => {
    // navigate to your Edit screen (or open same screen in edit mode)
    // navigation.navigate("edit-task", { taskTitle, ... });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Top header row */}
        <View style={styles.headerRow}>
          {/* Left spacer to keep title perfectly centered */}
          <View style={styles.headerSideSpacer} />

          <Text
            style={styles.title}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {taskTitle}
          </Text>

          {/* Edit button on the right */}
          <Pressable
            style={({ pressed }) => [
              styles.editButton,
              pressed && styles.editButtonPressed,
            ]}
            onPress={handleEditPress}
          >
            <Ionicons
              name="pencil-outline"
              size={18}
              color="#FFFFFF"
              style={styles.editIcon}
            />
            <Text style={styles.editText}>Edit</Text>
          </Pressable>
        </View>

        {/* TODO: rest of task details body goes here */}

      </View>
    </SafeAreaView>
  );
};

export default TaskDetails;