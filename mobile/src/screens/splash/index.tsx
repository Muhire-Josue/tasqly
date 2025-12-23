import { View, Text } from "react-native";
import styles from "./style";
import { FontAwesome5 } from "@expo/vector-icons";
import Spinner from "../../components/common/Spinner";

const Index: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.brand}>
        T
        <FontAwesome5 name="home" size={42} color="white" />
        sqly
      </Text>
      <Text style={styles.subtitle}>Simplify tasks. Amplify life.</Text>
      <Spinner />
    </View>
  );
};

export default Index;
