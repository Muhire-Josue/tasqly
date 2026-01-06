import { NotificationItem } from "../types/notifications";

const MOCK_NOTIFICATIONS: NotificationItem[] = [
  {
    id: "1",
    group: "Today",
    actorId: "1", // Henry
    type: "task",
    messagePrefix: "You accepted a new task:",
    highlight: "Take out plastic trash",
    timestamp: "March 25 – 9:35 AM",
  },
  {
    id: "2",
    group: "Today",
    actorId: "2", // Jane
    type: "task",
    messagePrefix: "Jane assigned you a new task:",
    highlight: "Clean the bathroom",
    timestamp: "March 25 – 8:10 AM",
  },
  {
    id: "3",
    group: "Today",
    actorId: "3", // Johnson (landlord)
    type: "repair",
    messagePrefix: "Landlord completed a repair:",
    highlight: "Fix leaking kitchen sink",
    timestamp: "March 25 – 7:45 AM",
  },

  {
    id: "4",
    group: "Yesterday",
    actorId: "4", // Diego
    type: "task",
    messagePrefix: "Diego assigned a new task to Valerie:",
    highlight: "Vacuum the living room",
    timestamp: "March 24 – 6:20 PM",
  },
  {
    id: "5",
    group: "Yesterday",
    actorId: "5", // Valerie
    type: "task",
    messagePrefix: "Valerie completed a task:",
    highlight: "Wash the dishes",
    timestamp: "March 24 – 5:02 PM",
  },
  {
    id: "6",
    group: "Yesterday",
    actorId: "3", // Johnson
    type: "repair",
    messagePrefix: "Landlord scheduled a repair:",
    highlight: "Check heating not working",
    timestamp: "March 24 – 3:03 PM",
  },

  {
    id: "7",
    group: "5 days ago",
    actorId: "1", // Henry
    type: "task",
    messagePrefix: "Henry reassigned a task to you:",
    highlight: "Take out the recycling",
    timestamp: "March 19 – 9:40 PM",
  },
  {
    id: "8",
    group: "5 days ago",
    actorId: "2", // Jane
    type: "task",
    messagePrefix: "Jane commented on a task:",
    highlight: "Buy groceries",
    timestamp: "March 19 – 8:15 PM",
  },
  {
    id: "9",
    group: "5 days ago",
    actorId: "4", // Diego
    type: "task",
    messagePrefix: "Diego completed a task:",
    highlight: "Mop the kitchen floor",
    timestamp: "March 19 – 6:50 PM",
  },
  {
    id: "10",
    group: "5 days ago",
    actorId: "3", // Johnson
    type: "repair",
    messagePrefix: "Landlord closed a repair request:",
    highlight: "Replace broken window lock",
    timestamp: "March 19 – 4:12 PM",
  },
];

export default MOCK_NOTIFICATIONS;
