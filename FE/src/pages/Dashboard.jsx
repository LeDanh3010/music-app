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
import { useAdminApiService } from "../services/adminService";

const Dashboard = () => {
  const [navShrink, setNavShrink] = useState(true);
  const adminApiService = useAdminApiService();
  const [users, setUsers] = useState([]);

  const toggleNavShrink = () => {
    setNavShrink(!navShrink);
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await adminApiService.getUser();
        +response?.DE === 1 && setUsers(response.data);
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
                <div className="list-cell title">Birth Date</div>
                <div className="list-cell title">Create At</div>
              </div>
              {users?.map((user) => {
                return (
                  <div className="list-row" key={user.id}>
                    <div className="list-cell">{user.id}</div>
                    <div className="list-cell">{user.username}</div>
                    <div className="list-cell">{user.email}</div>
                    <div className="list-cell">{user.birthDate}</div>
                    <div className="list-cell">{user.createdAt}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
