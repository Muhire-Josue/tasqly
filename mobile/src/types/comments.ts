import { ImageSourcePropType } from "react-native";

export type Comment = {
  id: string;
  author: {
    id: string;
    name: string;
    avatar?: ImageSourcePropType;
    role?: "landlord" | "member";
  };
  message: string;
  createdAt: string;
  isEditable?: boolean;
};
