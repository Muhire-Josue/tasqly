import { useState } from "react";
import { View, Text } from "react-native";
import styles from "./style";
import { FontAwesome5 } from "@expo/vector-icons";
import Spinner from "../../components/Spinner";
import { useNavigateTo } from "../../navigation/useNavigateTo";

const Index: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const navigateTo = useNavigateTo();
  setTimeout(() => {
    navigateTo("notification");
    setLoading(false);
  }, 2000);
  return (
    <View style={styles.container}>
      <Text style={styles.brand}>
        T
        <FontAwesome5 name="home" size={42} color="white" />
        sqly
      </Text>
      <Text style={styles.subtitle}>Simplify tasks. Amplify life.</Text>
      {loading && <Spinner />}
    </View>
  );
};

export default Index;
