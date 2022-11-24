import "./sidebar.css";
import { Icon } from "@iconify/react";
function SideBar() {
  return (
    <div>
      <div id="sidebar">
        <a href="/" className="brand">
          <img src="../Image/Logo.png" width="100" height="30"></img>
        </a>
        <ul className="side-menu">
          <li className="divider" dataText="main">
            Menu
          </li>
          <li>
            <a href="#" className="active">
              <Icon className="icon" icon="material-symbols:dashboard" />{" "}
              Dashboard
            </a>
          </li>
          <li>
            <a href="#">
              <Icon className="icon" icon="material-symbols:calendar-month" />{" "}
              Calendar
            </a>
          </li>
          <li className="divider" dataText="main">
            Tasks
          </li>
          <li>
            <a href="#">
              <Icon icon="ic:baseline-work-outline" className="icon" /> Personal
              <Icon
                icon="material-symbols:navigate-next"
                className="icon-right"
              />
            </a>
            <ul className="side-dropdown">
              <li>
                <a href="#">Alert</a>
              </li>
              <li>
                <a href="#">Badges</a>
              </li>
              <li>
                <a href="#">Breadcrumbs</a>
              </li>
              <li>
                <a href="#">Button</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <Icon icon="pajamas:work" className="icon" /> Work
              <Icon
                icon="material-symbols:navigate-next"
                className="icon-right"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon icon="ph:chart-pie-thin" className="icon" /> Overview
              <Icon
                icon="material-symbols:navigate-next"
                className="icon-right"
              />
            </a>
          </li>

          <li>
            <a href="#">
              <Icon icon="ic:round-table-chart" className="icon" /> Completed
              <Icon
                icon="material-symbols:navigate-next"
                className="icon-right"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon icon="mdi:event-heart" className="icon" /> Events
              <Icon
                icon="material-symbols:navigate-next"
                className="icon-right"
              />
            </a>
            <ul className="side-dropdown">
              <li>
                <a href="#">Basic</a>
              </li>
              <li>
                <a href="#">Select</a>
              </li>
              <li>
                <a href="#">Checkbox</a>
              </li>
              <li>
                <a href="#">Radio</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div id="content">
        <nav>
          <i className="bx bx-menu toggle-sidebar"></i>
          <form action="#">
            <div className="form-group">
              <input type="text" placeholder="Search..." />
              <Icon className="icon" icon="ic:outline-search" />
            </div>
          </form>
          <a href="#" className="nav-link">
            <i className="bx bxs-bell icon"></i>
            <span className="badge">5</span>
          </a>
          <a href="#" className="nav-link">
            <i className="bx bxs-message-square-dots icon"></i>
            <span className="badge">8</span>
          </a>
          <span className="divider"></span>
          <div className="profile">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <ul className="profile-link">
              <li>
                <a href="#">
                  <i className="bx bxs-user-circle icon"></i> Profile
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxs-cog"></i> Settings
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxs-log-out-circle"></i> Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
