// src/mocks/household.ts
import type { ImageSourcePropType } from "react-native";
import { type Member } from "./members";
import HouseImage from "../assets/house.jpg";

export type Household = {
  id?: string;
  name: string;
  inviteLink: string;
  description: string;
  image?: ImageSourcePropType;
  members: Member[];
};

export const HOUSEHOLD_MOCK: Household = {
  id: "house-1",
  name: "The Smith’s Home",
  inviteLink: "tasqly.io/invite/K7P3L",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  image: HouseImage,
  members: [], // or MEMBERS_MOCK slice
  // members: MEMBERS_MOCK,
};
