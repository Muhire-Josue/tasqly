import { type ParamListBase, useNavigation } from '@react-navigation/native';
import { type StackNavigationProp } from '@react-navigation/stack';

export const useNavigateTo = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const navigateTo = (screen: string): void => {
    navigation.navigate(screen);
  };

  return navigateTo;
};
