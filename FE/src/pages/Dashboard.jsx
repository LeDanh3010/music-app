import "../scss/pages/Dashboard.scss";
import { useEffect, useState } from "react";
import {
  CgProfile,
  TiThMenu,
  IoIosNotifications,
  IoIosSettings,
  TbReportAnalytics,
  MdLogout,
} from "../icons/Icon";
import SidebarOption from "../components/SidebarOption";
import { useAdminService } from "../services/adminService";

const Dashboard = () => {
  const [navShrink, setNavShrink] = useState(true);

  const toggleNavShrink = () => {
    setNavShrink(!navShrink);
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await useAdminService.getUser();
        console.log("response", response);
      } catch (e) {
        console.error("Error get user ", e);
        throw new Error("failed to get user");
      }
    };
    fetchUser();
  }, []);
  return (
    <div className="dashboard-container">
      <header className="hero">
        <div className="logo-content top">
          <TiThMenu className="logo-left" onClick={toggleNavShrink} />
          <h1>Dashboard</h1>
        </div>
        <div className="message top">
          <IoIosNotifications className="logo-right" />
          <span className="admin">Admin</span>
        </div>
      </header>
      <div className="main-container">
        <div className="sidebar-container">
          <nav
            className={
              !navShrink ? "sidebar-nav sidebar_expand" : "sidebar-nav"
            }
          >
            <ul className="sidebar-upper-options">
              <SidebarOption
                icon={CgProfile}
                text="Profile"
                navShrink={navShrink}
              />
              <SidebarOption
                icon={TbReportAnalytics}
                text="Report"
                navShrink={navShrink}
              />
              <SidebarOption
                icon={IoIosSettings}
                text="Setting"
                navShrink={navShrink}
              />
              <SidebarOption
                icon={MdLogout}
                text="Logout"
                navShrink={navShrink}
              />
            </ul>
          </nav>
        </div>
        <div className="list-container">
          <div className="list-content">
            <div className="list-title">
              <h3 className="list-users">List Users</h3>
            </div>
            <div className="list-items">
              <div className="list-header">
                <div className="list-cell title ">ID</div>
                <div className="list-cell title">Username</div>
                <div className="list-cell title">Email</div>
                <div className="list-cell title">Phone Number</div>
                <div className="list-cell title">Address</div>
              </div>

              <div className="list-row">
                <div className="list-cell">1</div>
                <div className="list-cell">John Doe</div>
                <div className="list-cell">johndoe@example.com</div>
                <div className="list-cell">012345621</div>
                <div className="list-cell">San Francisco</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
