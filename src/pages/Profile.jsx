import AddNewPopup from "../components/AddNewPopup";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";
import ResponsiveSearchBar from "../components/ResponsiveSearchBar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <ResponsiveSearchBar />
      <Dashboard />
      <AddNewPopup />
    </>
  );
};

export default Profile;
