import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://api.chucknorris.io/jokes/random",
});

export const messagesAPI = {
  getJoke() {
    return instance.get("").then((respone) => {
      return respone.data.value;
    });
  },
};
