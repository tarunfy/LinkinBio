import Profile from "../components/Profile";
import CreateLinkModal from "../components/Modals/CreateLinkModal";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import LinkCard from "../components/Cards/LinkCard";
import { useEffect } from "react";
import QRModal from "../components/Modals/QRModal";

const Dashboard = () => {
  const { userLinks, fetchCurrentUserLinks } = useContext(AuthContext);

  useEffect(() => {
    async function getLinks() {
      await fetchCurrentUserLinks();
    }

    getLinks();
  }, []);

  return (
    <div className="max-w-[800px] mx-auto py-10 space-y-10">
      <Profile />
      <div className="space-x-4">
        <CreateLinkModal />
        <QRModal />
      </div>
      <div className="grid grid-cols-3 w-full gap-6">
        {userLinks.map((link) => (
          <LinkCard key={link.id} info={link} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
