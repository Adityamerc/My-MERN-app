import axios from "axios";

export const AUTHORIZED = "AUTHORIZED";
export const UN_AUTHORIZED = "UN_AUTHORIZED";

export function signin(posResponse) {
  if (posResponse.data !== null) {
    return {
      type: AUTHORIZED,
    };
  } else {
    return {
      type: UN_AUTHORIZED,
    };
  }
}

export function fetch_data(mail_id) {
  console.log(mail_id);
  return async (dispatch) => {
    try {
      const json = await axios.post("http://localhost:5000/addName/signin", {
        email: mail_id,
      });
      dispatch(signin(json));
    } catch (err) {
      console.log(err);
    }
  };
}
