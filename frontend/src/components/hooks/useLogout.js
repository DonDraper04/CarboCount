import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
export default function useLogout() {
  const navigate = useNavigate();
  const { dispatch } = useApp();
  const logout = () => {
    Cookies.remove("user");
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  return { logout };
}
