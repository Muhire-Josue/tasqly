import { ImageSourcePropType } from "react-native";

type TaskStatus = "Pending" | "Completed" | "Rejected";

type TaskCard = {
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

export default TaskCard;
