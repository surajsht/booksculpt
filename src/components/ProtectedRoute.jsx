import { UseCustomContext } from "../context/CustomContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  let { currentUser, profileLoading } = UseCustomContext();

  if (!profileLoading) {
    if (!currentUser) {
      return <Navigate to="/" />;
    } else {
      return children;
    }
  }
};

export default ProtectedRoute;
