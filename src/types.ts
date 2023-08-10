export interface Conversation {
  id: string;
  userName: string;
  userEmail: string;
  messages: Message[];
}

export interface Message {
  id: string;
  text: string;
  timestamp: number;
  owner: boolean;
}

export interface ChatState {
  conversations: Conversation[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface UserWithCredentials extends User {
  password: string;
}
