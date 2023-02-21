import { User, UserState } from "./types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

describe("Given the useReducer function", () => {
  const initialState: UserState = {
    username: "",
    isLogged: false,
    token: "",
  };
  describe("When it receives an action with type loginUser and a user", () => {
    test("Then it should return a user with isLogged property set to true", () => {
      const user: User = {
        username: "killuina",
        token: "quehagoquehagoquehago",
      };
      const expectedNewUserstate: UserState = {
        username: "killuina",
        token: "quehagoquehagoquehago",
        isLogged: true,
      };
      const loginUserAction = loginUserActionCreator(user);

      const newUserState = userReducer(initialState, loginUserAction);

      expect(newUserState).toStrictEqual(expectedNewUserstate);
    });
  });
  describe("When it receives an action with type logoutUser", () => {
    test("Then it should return the initial user state", () => {
      const logoutUserAction = logoutUserActionCreator();

      const newUserState = userReducer(initialState, logoutUserAction);

      expect(newUserState).toStrictEqual(initialState);
    });
  });
});
