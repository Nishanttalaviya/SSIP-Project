import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  // Define all admin routes with proper prefixes
  const adminRoutes = {
    dashboard: "/admin",
    addMembers: "/admin/add-members",
    maintenance: "/admin/maintenance",
    complaints: "/admin/complaints",
    hallBooking: "/admin/hall-booking",
    noticeBoard: "/admin/notice-board",
    visitorManagement: "/admin/visitor-management",
    vehicleInfo: "/admin/vehicle-info",
    profile: "/admin/profile",
    logout: "/logout",
  };

  return (
    <aside id="sidebar" className={isExpanded ? "expand" : ""}>
      <div className="d-flex">
        <button className="toggle-btn" type="button" onClick={toggleSidebar}>
          <i className="bi bi-grid"></i>
        </button>
        <div className="sidebar-logo">
          <NavLink to={adminRoutes.dashboard} className="navbar-brand fs-2">
            RNV
          </NavLink>
        </div>
      </div>
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <NavLink
            to={adminRoutes.dashboard}
            end
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-house-door me-2"></i>
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink
            to={adminRoutes.addMembers}
            className={({ isActive }) =>
              `sidebar-link d-flex align-items-center ${
                isActive ? "active" : ""
              }`
            }
          >
            <i className="bi bi-person-plus me-2"></i>
            <span className="sidebar-text">Add Members</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink
            to={adminRoutes.maintenance}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-gear-fill me-2"></i>
            <span>Maintenance</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink
            to={adminRoutes.complaints}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-exclamation-circle-fill me-2"></i>
            <span>Complaints</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink
            to={adminRoutes.hallBooking}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-calendar-check-fill me-2"></i>
            <span>Hall Booking</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink
            to={adminRoutes.noticeBoard}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-postcard me-2"></i>
            <span>Notice Board</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink
            to={adminRoutes.visitorManagement}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-person me-2"></i>
            <span>Visitor Management</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink
            to={adminRoutes.vehicleInfo}
            className={({ isActive }) =>
              `sidebar-link d-flex align-items-center gap-2 ${
                isActive ? "active" : ""
              }`
            }
          >
            <i className="bi bi-car-front me-2"></i>
            <span>Vehicle Info</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink
            to={adminRoutes.profile}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <i className="bi bi-person-circle me-2"></i>
            <span>Profile</span>
          </NavLink>
        </li>
      </ul>
      <div className="sidebar-footer">
        <NavLink
          to={adminRoutes.logout}
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active" : ""}`
          }
        >
          <i className="bi bi-box-arrow-left me-2"></i>
          <span>Logout</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
