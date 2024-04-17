import {
  // Link,
  NavLink,
  useNavigate,
} from "react-router-dom";
import { useIsIserAuthenticated } from "./Hooks/useIsUserAuthenticated";

function Header() {
  const navigate = useNavigate();
  const { isAuthenticated, setIsauthenticated } = useIsIserAuthenticated();

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsauthenticated(false);
    navigate("/");
  };

  const Styles = {
    link: {
      background: "#353935",
      border: "1px solid wheat",
      padding: "0.2rem",
      borderRadius: "0.4rem",
      textDecoration: "none",
      color: "whitesmoke",
    },
  };

  const getLinkStyle = ({ isActive }: { isActive: any }) => {
    return {
      background: isActive ? "#03925e" : "#353935",
      border: "1px solid wheat",
      padding: "0.2rem",
      borderRadius: "0.4rem",
      textDecoration: "none",
      color: "whitesmoke",
    };
  };

  return (
    <nav
      style={{
        maxWidth: "800px",
        margin: "auto",
        paddingTop: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NavLink
          to={"/"}
          style={({ isActive }) => {
            return getLinkStyle({ isActive });
          }}
        >
          Posts
        </NavLink>
        {isAuthenticated && (
          <NavLink
            to={"/createpost"}
            style={({ isActive }) => {
              return getLinkStyle({ isActive });
            }}
          >
            Create Post
          </NavLink>
        )}
        {!isAuthenticated && (
          <NavLink
            to={"/login"}
            style={({ isActive }) => {
              return getLinkStyle({ isActive });
            }}
          >
            Login
          </NavLink>
        )}
        {!isAuthenticated && (
          <NavLink
            to={"/register"}
            style={({ isActive }) => {
              return getLinkStyle({ isActive });
            }}
          >
            Register
          </NavLink>
        )}
        {isAuthenticated && (
          <a style={Styles.link} onClick={handleLogout}>
            Logout
          </a>
        )}
      </div>
    </nav>
  );
}

export default Header;
