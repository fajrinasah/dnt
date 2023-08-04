import logo from "./logo-light.png";
// import profileIcon from "./profile.png";
import ButtonStandard from "../../../01-atoms/forAuthAndManage/buttons/ButtonStandard";
import Nav from "../../../02-molecules/forAuthAndManage/Nav";

import "./styles.css";

export default function Header({
  username = "",
  roleId = 1,
  userPhoto = "",
  toggleReportsDropdown = () => {},
  reportsDropdown = false,
  profileMenu = false,
  toggleProfileMenu = () => {},
  toggleChangePhotoModal = () => {},
  logoutHandler = () => {},
}) {
  return (
    <header>
      <div className="logo-container d-flex-row">
        <img src={logo} alt="dnt logo" />
        <h1>dnt</h1>
      </div>

      {roleId === 1 && (
        <Nav
          toggleReportsDropdown={toggleReportsDropdown}
          reportsDropdown={reportsDropdown}
        />
      )}

      {username && (
        <div className="profile-container">
          <button id="show-profile-menu" onClick={toggleProfileMenu}>
            <span className="sr-only">Show Profile Menu</span>
            {userPhoto && <img src={userPhoto} alt="" />}
          </button>
          {profileMenu && (
            <div className="buttons-container d-flex-col">
              <ButtonStandard
                story="ghost-main"
                bold=""
                width="full"
                content="Change Photo"
                onClick={toggleChangePhotoModal}
              />

              <ButtonStandard
                story="ghost-main"
                bold=""
                width="full"
                content="Logout"
                onClick={logoutHandler}
              />
            </div>
          )}
        </div>
      )}
    </header>
  );
}
