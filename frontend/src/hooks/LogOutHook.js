import { type } from "../context/constants";
import { useAuthContext } from "./AuthHook";

export const useLogOut = () => {
  const { dispatch } = useAuthContext();

  const logOut = () => {
    // remove user from localStorage
    localStorage.removeItem("user");

    // remove user from local state
    dispatch({ type: type.LOGOUT });
  };

  return { logOut };
};
