import { FontAwesome6, Ionicons } from "@expo/vector-icons";

export type TabKey = "tasks" | "repairs" | "notifications" | "profile";

export type TabConfig =
  | {
      key: Exclude<TabKey, "profile">;
      label: string;
      icon: keyof typeof FontAwesome6.glyphMap;
      badge?: number;
      library: "fa6";
    }
  | {
      key: "profile";
      label: string;
      icon: keyof typeof Ionicons.glyphMap;
      badge?: number;
      library: "ion";
    };

export const TABS: TabConfig[] = [
  { key: "tasks", label: "Tasks", icon: "list-check", library: "fa6" },
  { key: "repairs", label: "Repair", icon: "hammer", library: "fa6" },
  {
    key: "notifications",
    label: "Notifications",
    icon: "bell",
    badge: 9,
    library: "fa6",
  },
  {
    key: "profile",
    label: "Profile",
    icon: "person-circle",
    library: "ion",
  },
];
