import {CHANGE_FRIENDSHIP_STATUS, SET_USERS} from "../actions/actionTypes";
import userPhoto from "../../img/userPhoto.png"

let initialState = {
  users: [
    {
      userId: 0, userPhoto: userPhoto, friendship: true,
      fullName: "Islam", status: "I`m a boss", location: {city: "Bishkek", country: "Kyrgyzstan"}
    },
    {
      userId: 1, userPhoto: userPhoto, friendship: true,
      fullName: "Namys", status: "I`m a boss too", location: {city: "Kochkor", country: "Kyrgyzstan"}
    },
    {
      userId: 2, userPhoto: userPhoto, friendship: false,
      fullName: "Lena", status: "I`m a boss too", location: {city: "Paris", country: "France"}
    },
    {
      userId: 3, userPhoto: userPhoto, friendship: true,
      fullName: "Niya", status: "Kawai", location: {city: "Akihabara", country: "Japanese"}
    },
  ]
}

export const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case CHANGE_FRIENDSHIP_STATUS:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.userId === action.userId) {
            return {...u, friendship: !u.friendship}
          }

          return u;
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      };

    default:
      return state;
  }
}