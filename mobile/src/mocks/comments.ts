import Ben from "../assets/ben.jpg";
import Micheal from "../assets/michael.jpg";
import Vince from "../assets/vince.jpg";
import Well from "../assets/wellington.jpg";
import LandLord from "../assets/landlord.jpg";

import Trash from "../assets/trash.jpg";
import Trashes from "../assets/trashes.jpg";

import Leak from "../assets/leak.jpg";
import Sink from "../assets/sink.jpg";

import type { CommentsThread } from "../types/comments";

export const COMMENTS_THREADS_MOCK: CommentsThread[] = [
  {
    id: "1",
    taskId: "1",
    comments: [
      {
        id: "1",
        author: { id: "1", name: "Henry Smithson", avatar: Ben },
        message: "Hey, is this the plastic bin or all trash?",
        createdAt: "9:12 AM",
        isEditable: true,
      },
      {
        id: "2",
        author: { id: "2", name: "Jane Smithson", avatar: Micheal },
        message: "Just plastic 👍 The blue bin.",
        createdAt: "9:14 AM",
      },
      {
        id: "3",
        author: { id: "3", name: "Johnson Smithson" },
        message: "Correct, this task is for plastic waste only.",
        createdAt: "9:16 AM",
        image: Trashes,
      },
      {
        id: "4",
        author: { id: "4", name: "Diego Smithson", avatar: Well },
        message: "The bin is almost full, just a heads-up.",
        createdAt: "9:17 AM",
      },
      {
        id: "5",
        author: { id: "5", name: "Valerie Smithson", avatar: Vince },
        message: "Thanks! I’ll make sure everything fits 👍",
        createdAt: "9:18 AM",
        isEditable: true,
      },
      {
        id: "6",
        author: { id: "6", name: "Landlord", avatar: LandLord },
        message: "Pickup is tomorrow morning 🗓️",
        createdAt: "9:19 AM",
        image: Trash,
      },
    ],
    notes: [
      { id: "n1", text: "Task Updated by Johnson", createdAt: "10:17 AM" },
      {
        id: "n2",
        text: "Task marked as Completed by Henry",
        createdAt: "10:19 AM",
      },
    ],
  },

  {
    id: "2",
    taskId: "2",
    comments: [
      {
        id: "1",
        author: { id: "5", name: "Valerie Smithson", avatar: Vince },
        message: "I can do groceries today. Any preferences?",
        createdAt: "6:02 PM",
        isEditable: true,
      },
      {
        id: "2",
        author: { id: "2", name: "Jane Smithson", avatar: Micheal },
        message: "Please get oat milk + eggs 🙏",
        createdAt: "6:05 PM",
      },
      {
        id: "3",
        author: { id: "1", name: "Henry Smithson", avatar: Ben },
        message: "Also paper towels.",
        createdAt: "6:06 PM",
      },
    ],
    notes: [{ id: "1", text: "Task created by Valerie", createdAt: "5:58 PM" }],
  },

  {
    id: "3",
    taskId: "3",
    comments: [
      {
        id: "1",
        author: { id: "4", name: "Diego Smithson", avatar: Well },
        message: "Vacuum is making a weird sound, still okay to use?",
        createdAt: "8:41 AM",
      },
      {
        id: "2",
        author: { id: "1", name: "Henry Smithson", avatar: Ben },
        message: "Yeah but avoid the rug edge, it snags.",
        createdAt: "8:43 AM",
        isEditable: true,
      },
    ],
    notes: [],
  },

  {
    id: "1",
    repairId: "1",
    comments: [
      {
        id: "1",
        author: { id: "1", name: "Henry Smithson", avatar: Ben },
        message: "Kitchen sink is leaking again 😩",
        createdAt: "11:22 AM",
        isEditable: true,
      },
      {
        id: "2",
        author: { id: "6", name: "Landlord", avatar: LandLord },
        message: "Can you send a photo of the pipe under the sink?",
        createdAt: "11:26 AM",
      },
      {
        id: "3",
        author: { id: "1", name: "Henry Smithson", avatar: Ben },
        message: "",
        createdAt: "11:30 AM",
        image: Sink,
        isEditable: true,
      },
      {
        id: "4",
        author: { id: "6", name: "Landlord", avatar: LandLord },
        message: "Got it. I’ll send someone this afternoon.",
        createdAt: "11:33 AM",
      },
    ],
    notes: [{ id: "1", text: "Repair request updated", createdAt: "11:35 AM" }],
  },

  {
    id: "2",
    repairId: "2",
    comments: [
      {
        id: "1",
        author: { id: "2", name: "Jane Smithson", avatar: Micheal },
        message: "Water stains on the ceiling in the living room.",
        createdAt: "7:10 PM",
        isEditable: true,
      },
      {
        id: "2",
        author: { id: "4", name: "Diego Smithson", avatar: Well },
        message: "Yeah I noticed it too. It’s spreading.",
        createdAt: "7:12 PM",
      },
      {
        id: "3",
        author: { id: "6", name: "Landlord", avatar: LandLord },
        message: "Please avoid that area. I’m checking the unit above.",
        createdAt: "7:20 PM",
      },
      {
        id: "4",
        author: { id: "2", name: "Jane Smithson", avatar: Micheal },
        message: "",
        createdAt: "7:24 PM",
        image: Leak,
        isEditable: true,
      },
    ],
  },
];

export const COMMENTS_MOCK: CommentsThread = COMMENTS_THREADS_MOCK[0];
