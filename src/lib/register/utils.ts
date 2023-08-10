import { UserWithCredentials } from "../../types";

export const existUser = (email: string, users: UserWithCredentials[]) => {
  
  return users.some((user) => user.email === email);
}