import { RootState } from "../../redux/store";

export const getUser = (state: RootState) => state.auth.data.user;