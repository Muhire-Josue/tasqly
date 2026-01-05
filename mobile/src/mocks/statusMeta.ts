import {
  PRIMARY_COLOR_YELLOW,
  PRIMARY_COLOR_GREEN,
  PRIMARY_COLOR_RED,
} from "../theme/colors";
import { TaskStatus } from "../types/tasks";
import { Ionicons } from "@expo/vector-icons";

export const STATUS_META: Record<
  TaskStatus,
  { label: string; icon: keyof typeof Ionicons.glyphMap; color: string }
> = {
  Pending: {
    label: "Pending",
    icon: "time-outline",
    color: PRIMARY_COLOR_YELLOW,
  },
  Completed: {
    label: "Completed",
    icon: "checkmark-circle-outline",
    color: PRIMARY_COLOR_GREEN,
  },
  Rejected: {
    label: "Rejected",
    icon: "close-circle-outline",
    color: PRIMARY_COLOR_RED,
  },
};
