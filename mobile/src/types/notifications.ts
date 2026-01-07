export type NotificationGroup = "Today" | "Yesterday" | "5 days ago";

export type NotificationType = "task" | "repair";
export type NotificationAction = "accept" | "decline";

export type NotificationItem = {
  id: string;
  group: string;

  type: "task" | "repair";

  createdBy: string; // user id
  assignedTo: string; // user id

  messagePrefix: string;
  highlight: string;
  timestamp: string;

  taskId: string | null;
  repairId: string | null;

  actions?: NotificationAction[];
  actorId: string;
  requiresResponse?: boolean;
};
