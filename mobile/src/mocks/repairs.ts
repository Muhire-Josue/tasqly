import { CardType, Frequency, Status } from "../types/tasks";
import { PRIMARY_COLOR_RED } from "../theme/colors";
import LandLord from "../assets/landlord.jpg";

const LOREM =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...";

const LANDLORD = "Johnson Smithson";

const FREQUENCIES: Frequency[] = [
  "None",
  "Daily",
  "Weekly",
  "Bi-weekly",
  "Monthly",
];

const STATUSES: Status[] = ["Pending", "Completed", "Rejected"];

const colorForStatus = (status: Status) => {
  if (status === "Pending") return "#F4A11A";
  if (status === "Completed") return "#3CCB79";
  return PRIMARY_COLOR_RED;
};

const pickFrequency = (id: string): Frequency => {
  const n = Number(id);
  if (Number.isNaN(n)) return "None";
  return FREQUENCIES[n % FREQUENCIES.length];
};

const repairTitles = [
  "Fix leaking kitchen sink",
  "Unclog bathroom drain",
  "Replace broken window lock",
  "Repair bedroom door handle",
  "Fix flickering hallway light",
  "Check heating not working",
  "Repair dishwasher leak",
  "Fix toilet constantly running",
  "Patch wall crack in living room",
  "Replace smoke detector battery",
  "Fix shower low water pressure",
  "Repair loose electrical outlet",
  "Fix fridge not cooling properly",
  "Repair washing machine vibration",
  "Fix oven not heating evenly",
  "Replace broken blinds",
  "Fix balcony door draft",
  "Repair kitchen cabinet hinge",
  "Fix ceiling stain (possible leak)",
  "Replace bathroom fan",
];

const MOCK_REPAIRS: CardType[] = Array.from({ length: 50 }).map((_, idx) => {
  const id = String(idx + 1);

  const status: Status = STATUSES[idx % STATUSES.length];
  const color = colorForStatus(status);

  return {
    id,
    title: repairTitles[idx % repairTitles.length],
    status,
    dueDate: `April ${(idx % 28) + 1} - ${9 + (idx % 6)}:00 AM`,
    sideColor: color,
    statusColor: color,
    dateColor: color,
    urgent: idx % 4 === 0,
    assignee: LANDLORD,
    avatar: LandLord,
    commentsCount: idx % 3 === 0 ? 2 : null,
    description: LOREM,
    frequency: pickFrequency(id),
    assigneeRotationEnabled: false,
  };
});

export default MOCK_REPAIRS;
