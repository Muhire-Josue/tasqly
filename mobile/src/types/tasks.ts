import { ImageSourcePropType } from "react-native";

export type TaskStatus = "Pending" | "Completed" | "Rejected";

export type TaskCard = {
  id: string;
  title: string;
  status: TaskStatus;
  dueDate: string;
  sideColor: string;
  statusColor: string;
  dateColor: string;
  urgent?: boolean;
  assignee: string;
  avatar: ImageSourcePropType;
};
