import type { ImageSourcePropType } from "react-native";

export type CommentAuthor = {
  id: string;
  name: string;
  avatar?: ImageSourcePropType;
};

export type CommentMessage = {
  id: string;
  author: CommentAuthor;
  createdAt: string;
  message: string;
  isEditable?: boolean;
  image?: ImageSourcePropType;
};

export type CommentNote = {
  id: string;
  text: string;
  createdAt: string;
};

export type CommentsThread = {
  id: string;
  comments: CommentMessage[];
  notes?: CommentNote[];
};
