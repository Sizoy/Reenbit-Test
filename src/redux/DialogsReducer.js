import user1 from "./../components/assets/images/user1.png";
import user2 from "./../components/assets/images/user2.png";
import user3 from "./../components/assets/images/user3.png";
import user4 from "./../components/assets/images/user4.png";

const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  DialogsData: [
    {
      id: 1,
      fullName: "AliceFreeman",
      photo: user1,
      MessagesData: [
        { id: 1, message: "Zdarova", date: "4/22/17, 4:10AM" },
        { id: 2, message: "Hi", date: "4/22/17, 4:10AM" },
      ],
    },
    {
      id: 2,
      fullName: "Josefina",
      photo: user2,
      MessagesData: [
        { id: 1, message: "Zdarova", date: "4/22/17, 4:10AM" },
        { id: 2, message: "Hi", date: "4/22/17, 4:10AM" },
      ],
    },
    {
      id: 3,
      fullName: "Velazquez",
      photo: user3,
      MessagesData: [
        { id: 1, message: "Zdarova", date: "4/22/17, 4:10AM" },
        { id: 2, message: "Hi", date: "4/22/17, 4:10AM" },
      ],
    },
    {
      id: 4,
      fullName: "Barrera",
      photo: user4,
      MessagesData: [
        { id: 1, message: "Zdarova", date: "4/22/17, 4:10AM" },
        { id: 2, message: "Hi", date: "4/22/17, 4:10AM" },
      ],
    },
  ],
};

export const DialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case SEND_MESSAGE:
    //   return {
    //     ...state,
    //     MessagesData: [
    //       ...state.MessagesData,
    //       { id: 3, message: action.typedMessageText },
    //     ],
    //   };

    default:
      return state;
  }
};

// export const SendMessage = (typedMessageText) => ({
//   type: SEND_MESSAGE,
//   typedMessageText,
// });
