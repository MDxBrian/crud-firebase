import { ActionTypes } from "../contants/action-types";
import { database } from "../../configs/database";
import { ref, get, set, child, remove } from "firebase/database";

export const startLoadingUsers = () => {
  return (dispatch) => {
    const dbRef = ref(database);
    get(child(dbRef, `users`))
      .then((snapshot) => {
        let users = [];
        if (snapshot.exists()) {
          snapshot.forEach((childsnap) => {
            users.push(childsnap.val());
          });
        }
        dispatch(setUsers(users));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const startUpsertUser = (user, type) => {
  return (dispatch) => {
    set(ref(database, `users/${user.id}`), {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
    })
      .then(() => {
        if (type === "add") {
          dispatch(addUser(user));
        } else if (type === "edit") {
          dispatch(updateUser(user));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const startDeleteUser = (id) => {
  return (dispatch) => {
    remove(ref(database, `users/${id}`))
      .then(() => {
        dispatch(removeUser(id));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const setUsers = (users) => {
  return {
    type: ActionTypes.SET_USERS,
    payload: users,
  };
};

export function addUser(user) {
  return {
    type: ActionTypes.ADD_USER,
    payload: user,
  };
}

export const updateUser = (users) => {
  return {
    type: ActionTypes.UPDATE_SELECTED_USER,
    payload: users,
  };
};

export const removeUser = (userId) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_USER,
    payload: userId,
  };
};
