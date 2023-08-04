import { NavLink } from "react-router-dom";

export default function NavLinkForHeader({
  type = "image", // "image" or "text"
  destination = "",
  navlinkName = "",
  content = "",
}) {
  if (type === "image") {
    return (
      <div className={`navlink-container ${navlinkName}`}>
        <NavLink to={destination} className="navlink d-flex-col">
          <span className="sr-only">{content}</span>
          <div className="icon" title={content}></div>
        </NavLink>
      </div>
    );
  } else {
    return (
      <div className={`navlink-container-text ${navlinkName}`}>
        <NavLink to={destination} className="navlink">
          {content}
        </NavLink>
      </div>
    );
  }
}
