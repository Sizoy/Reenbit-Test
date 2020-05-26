import user1 from "./../components/assets/images/user1.png";
import user2 from "./../components/assets/images/user2.png";
import user3 from "./../components/assets/images/user3.png";
import user4 from "./../components/assets/images/user4.png";
import { messagesAPI } from "../api/api";
import { reset } from "redux-form";

const SEND_MESSAGE = "SEND-MESSAGE";
const SEND_JOKE = "SEND-JOKE";

let initialState = {
  DialogsData: [
    {
      id: 1,
      fullName: "Alice Freeman",
      photo: user1,
      MessagesData: [
        {
          id: 1,
          message: "You are the worst!",
          date: "1/22/17",
          time: "3:02 AM",
          sender: "user",
        },
      ],
    },

    {
      id: 2,
      fullName: "Josefina",
      photo: user2,
      MessagesData: [
        {
          id: 1,
          message:
            "Quickly come to the meeting room 1B, we have a big server issue",
          date: "4/22/17",
          time: "4:00 AM",
          sender: "user",
        },
        {
          id: 2,
          message:
            "I'm having breakfast right now, can't you wait for 10 minutes?",
          date: "4/22/17",
          time: "4:05 AM",
          sender: "me",
        },
        {
          id: 3,
          message: "We are losing money! Quick!",
          date: "4/22/17",
          time: "4:10 AM",
          sender: "user",
        },
      ],
    },
    {
      id: 3,
      fullName: "Velazquez",
      photo: user3,
      MessagesData: [
        {
          id: 1,
          message:
            "Quickly come to the meeting room 1B, we have a big server issue",
          date: "4/22/17",
          time: "4:00 AM",
          sender: "user",
        },
      ],
    },
    {
      id: 4,
      fullName: "Barrera",
      photo: user4,
      MessagesData: [],
    },
  ],
};

export const DialogsReducer = (state = initialState, action) => {
  let uniqueKey = Math.floor(Math.random() * Math.floor(1000)); //For id value

  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        DialogsData: state.DialogsData.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              MessagesData: [
                ...user.MessagesData,
                {
                  id: uniqueKey,
                  message: action.typedMessageText,
                  date: "1/22/17",
                  time: "3:02 AM",
                  sender: "me",
                },
              ],
            };
          }
          return user;
        }),
      };

    case SEND_JOKE:
      return {
        ...state,
        DialogsData: state.DialogsData.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              MessagesData: [
                ...user.MessagesData,
                {
                  id: uniqueKey,
                  message: action.joke,
                  date: "1/22/17",
                  time: "3:02 AM",
                  sender: "user",
                },
              ],
            };
          }
          return user;
        }),
      };

    default:
      return state;
  }
};

//Action Creators
export const SendMessageAC = (typedMessageText, userId) => {
  return {
    type: SEND_MESSAGE,
    typedMessageText,
    userId,
  };
};
export const sendJokeAC = (joke, userId) => {
  return {
    type: SEND_JOKE,
    joke,
    userId,
  };
};

//Thunks
export const SendMessage = (typedMessageText, userId) => {
  return (dispatch) => {
    dispatch(SendMessageAC(typedMessageText, userId));
    dispatch(reset("messageForm"));
  };
};
export const getJoke = (userId) => {
  return async (dispatch) => {
    let response = await messagesAPI.getJoke();
    if (response) {
      dispatch(sendJokeAC(response, userId));
    }
  };
};
