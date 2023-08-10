import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserWithCredentials } from '../../types';
import users from '../../data/users.json';

const initialState: UserWithCredentials[] = users as unknown as UserWithCredentials[];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserWithCredentials>) => {
      state.push(action.payload);
    },
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
