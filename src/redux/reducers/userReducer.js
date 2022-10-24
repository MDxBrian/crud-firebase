import { ActionTypes } from "../contants/action-types";

const usersList = [];

export const users = (state = usersList, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_USER:
      return { ...state, payload };
    case ActionTypes.SET_USERS:
      return { ...state, users: payload };
    case ActionTypes.UPDATE_SELECTED_USER:
      return {
        users: state.users.map((user) =>
          user.id === payload.id
            ? {
                email: payload.email,
                fullName: payload.fullName,
                id: payload.id,
              }
            : user
        ),
      };
    case ActionTypes.REMOVE_SELECTED_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== payload),
      };
    default:
      return state;
  }
};
