import FriendWorks from "component/molecules/FriendWorks";
import Games from "component/molecules/Games";
import Histories from "component/molecules/Histories";

export const SideBar = () => {
  return (
    <>
      <Histories />
      <FriendWorks />
      <Games />
    </>
  );
};

export default SideBar;
