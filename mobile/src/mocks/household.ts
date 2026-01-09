import { ImageSourcePropType } from "react-native";
import HouseImage from "../assets/house.jpg";
import { MEMBERS_MOCK, Member } from "./members";

export type Household = {
  id: string;
  name: string;
  inviteLink: string;
  image?: ImageSourcePropType; // default/fallback image from assets
  description: string;
  members: Member[];
};

export const HOUSEHOLD_MOCK: Household = {
  id: "house-1",
  name: "The Smith’s Home",
  inviteLink: "tasqly.io/invite/K7P3L",
  image: HouseImage,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  members: MEMBERS_MOCK,
};
