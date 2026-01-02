import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../types/navigation";

type AppNavigation = NativeStackNavigationProp<RootStackParamList>;

export const useNavigateTo = () => {
  const navigation = useNavigation<AppNavigation>();

  return navigation.navigate as AppNavigation["navigate"];
};
