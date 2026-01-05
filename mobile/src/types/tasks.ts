import { ImageSourcePropType } from "react-native";

export type Status = "Pending" | "Completed" | "Rejected";

export type Frequency = "None" | "Daily" | "Weekly" | "Bi-weekly" | "Monthly";

export type Card = {
  id: string;
  title: string;
  status: Status | undefined;
  dueDate: string;
  sideColor: string;
  statusColor: string;
  dateColor: string;
  urgent?: boolean;
  assignee: string;
  avatar?: ImageSourcePropType;
  commentsCount: number | null;
  description: string;
  frequency: Frequency;
  assigneeRotationEnabled: boolean;
};
