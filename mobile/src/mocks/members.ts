import Ben from "../assets/ben.jpg";
import Micheal from "../assets/michael.jpg";
import Vince from "../assets/vince.jpg";
import Well from "../assets/wellington.jpg";
import LandLord from "../assets/landlord.jpg";
import { ImageSourcePropType } from "react-native";

export type Member = {
  id: string;
  name: string;
  avatar?: ImageSourcePropType;
};

export const MEMBERS_MOCK: Member[] = [
  {
    id: "1",
    name: "Henry Smithson",
    avatar: Ben,
  },
  {
    id: "2",
    name: "Jane Smithson",
    avatar: Micheal,
  },
  {
    id: "3",
    name: "Johnson Smithson",
    // no avatar -> will show placeholder
  },
  {
    id: "4",
    name: "Diego Smithson",
    avatar: Well,
  },
  {
    id: "5",
    name: "Valerie Smithson",
    avatar: Vince,
  },
  {
    id: "6",
    name: "Henry Smithson",
    avatar: Ben,
  },
  {
    id: "7",
    name: "Jane Smithson",
    avatar: Micheal,
  },
  {
    id: "8",
    name: "Johnson Smithson",
    // no avatar -> will show placeholder
  },
  {
    id: "9",
    name: "Diego Smithson",
    avatar: Well,
  },
  {
    id: "10",
    name: "Valerie Smithson",
    avatar: Vince,
  },
  {
    id: "11",
    name: "Landlord",
    avatar: LandLord,
  },
];
