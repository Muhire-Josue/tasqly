export type NotificationGroup = "Today" | "Yesterday" | "5 days ago";

export type NotificationType = "task" | "repair";

export type NotificationItem = {
  id: string;
  group: NotificationGroup;
  actorId: string;
  type: NotificationType;
  messagePrefix: string;
  highlight: string;
  timestamp: string;
};
