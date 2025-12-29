import { ImageSourcePropType } from "react-native";

export type TaskStatus = "Pending" | "Completed" | "Rejected";

export type TaskCard = {
  id: string;
  title: string;
  status: TaskStatus;
  dateLabel: string;
  sideColor: string;
  statusColor: string;
  dateColor: string;
  urgent?: boolean;
  assigneeLabel: string;
  avatar: ImageSourcePropType;
};

