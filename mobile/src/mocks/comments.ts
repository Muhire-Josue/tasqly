import Ben from "../assets/ben.jpg";
import Micheal from "../assets/michael.jpg";
import Vince from "../assets/vince.jpg";
import Well from "../assets/wellington.jpg";
import LandLord from "../assets/landlord.jpg";
import Trash from "../assets/"
import { CommentsThread } from "../types/comments";

export const COMMENTS_MOCK: CommentsThread = {
  id: "1",
  comments: [
    {
      id: "1",
      author: {
        id: "1",
        name: "Henry Smithson",
        avatar: Ben,
      },
      message: "Hey, is this the plastic bin or all trash?",
      createdAt: "9:12 AM",
      isEditable: true,
    },
    {
      id: "2",
      author: {
        id: "2",
        name: "Jane Smithson",
        avatar: Micheal,
      },
      message: "Just plastic 👍 The blue bin.",
      createdAt: "9:14 AM",
    },
    {
      id: "3",
      author: {
        id: "3",
        name: "Johnson Smithson",
        // role: "landlord",
      },
      message: "Correct, this task is for plastic waste only.",
      createdAt: "9:16 AM",
    },
    {
      id: "4",
      author: {
        id: "4",
        name: "Diego Smithson",
        avatar: Well,
      },
      message: "The bin is almost full, just a heads-up.",
      createdAt: "9:17 AM",
    },
    {
      id: "5",
      author: {
        id: "5",
        name: "Valerie Smithson",
        avatar: Vince,
      },
      message: "Thanks! I’ll make sure everything fits 👍",
      createdAt: "9:18 AM",
      isEditable: true,
    },
    {
      id: "6",
      author: {
        id: "6",
        name: "Landlord",
        avatar: LandLord,
      },
      message: "Pickup is tomorrow morning 🗓️",
      createdAt: "9:17 AM",
      image: Trash,
    },
  ],
  notes: [
    {
      id: "1",
      text: "Task Updated by Johnson",
      createdAt: "10:17 AM",
    },
    {
      id: "n1",
      text: "Task marked as Completed by Henry",
      createdAt: "10:17 AM",
    },
  ],
};
