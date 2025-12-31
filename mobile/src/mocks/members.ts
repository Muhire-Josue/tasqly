import Ben from "../assets/ben.jpg";
import Micheal from "../assets/michael.jpg";
import Vince from "../assets/vince.jpg";
import Well from "../assets/wellington.jpg";
import { ImageSourcePropType } from "react-native";

export type Member = {
  id: string;
  name: string;
  avatar?: ImageSourcePropType;
};

export const MEMBERS_MOCK: Member[] = [
  {
    id: "1",
    name: "Henry Smith",
    avatar: Ben,
  },
  {
    id: "2",
    name: "Jane Smith",
    avatar: Micheal,
  },
  {
    id: "3",
    name: "Johnson Smith",
    // no avatar -> will show placeholder
  },
  {
    id: "4",
    name: "Diego Smith",
    avatar: Well,
  },
  {
    id: "5",
    name: "Valerie Smith",
    avatar: Vince,
  },
  {
    id: "6",
    name: "Henry Smith",
    avatar: Ben,
  },
  {
    id: "7",
    name: "Jane Smith",
    avatar: Micheal,
  },
  {
    id: "8",
    name: "Johnson Smith",
    // no avatar -> will show placeholder
  },
  {
    id: "9",
    name: "Diego Smith",
    avatar: Well,
  },
  {
    id: "10",
    name: "Valerie Smith",
    avatar: Vince,
  },
];
