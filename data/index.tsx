export interface Message {
  id: string;
  text: string;
  sender: "me" | "other";
  timestamp: string;
}

export const initialChats = [
  {
    id: "chat1",
    name: "Alice",
    lastMessage: "See you tomorrow!",
    timestamp: "10:40 AM",
    avatar: "https://placehold.co/100x100/7B68EE/FFFFFF?text=A",
  },
  {
    id: "chat2",
    name: "Bob",
    lastMessage: "Yeah, I am on my way.",
    timestamp: "10:35 AM",
    avatar: "https://placehold.co/100x100/4682B4/FFFFFF?text=B",
  },
  {
    id: "chat3",
    name: "Charlie",
    lastMessage: "Got it, thanks!",
    timestamp: "9:01 AM",
    avatar: "https://placehold.co/100x100/20B2AA/FFFFFF?text=C",
  },
];

export const initialMessages: Record<string, Message[]> = {
  chat1: [
    {
      id: "msg1",
      text: "Hey, are we still on for lunch?",
      sender: "other",
      timestamp: "10:30 AM",
    },
    {
      id: "msg2",
      text: "Yes! I am finishing up some work.",
      sender: "me",
      timestamp: "10:31 AM",
    },
    {
      id: "msg3",
      text: "Great. See you at the usual spot.",
      sender: "other",
      timestamp: "10:32 AM",
    },
    {
      id: "msg4",
      text: "See you tomorrow!",
      sender: "me",
      timestamp: "10:40 AM",
    },
  ],
};
