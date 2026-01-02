import {
  PRIMARY_COLOR_YELLOW,
  PRIMARY_COLOR_GREEN,
  PRIMARY_COLOR_RED,
} from "../theme/colors";
import { TaskStatus } from "../types/tasks";

export const STATUS_META: Record<
  TaskStatus,
  {
    label: string;
    icon: "check-circle" | "times-circle" | "clock";
    color: string;
  }
> = {
  Pending: {
    label: "Pending",
    icon: "clock",
    color: PRIMARY_COLOR_YELLOW,
  },
  Completed: {
    label: "Completed",
    icon: "check-circle",
    color: PRIMARY_COLOR_GREEN,
  },
  Rejected: {
    label: "Rejected",
    icon: "times-circle",
    color: PRIMARY_COLOR_RED,
  },
};
