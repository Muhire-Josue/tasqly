import { ImageSourcePropType } from "react-native";

export type TaskStatus = "Pending" | "Completed" | "Rejected";

export type Frequency = "None" | "Daily" | "Weekly" | "Bi-weekly" | "Monthly";

export type TaskCard = {
  id: string;
  title: string;
  status: TaskStatus | undefined;
  dueDate: string;
  sideColor: string;
  statusColor: string;
  dateColor: string;
  urgent?: boolean;
  assignee: string;
  avatar: ImageSourcePropType;
  commentsCount: number | null;
  description: string;
  frequency: Frequency;
};
