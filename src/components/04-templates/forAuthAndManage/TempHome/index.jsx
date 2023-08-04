/*=================================================================*/
// THIS IS A TEMPORARY PAGE TO CHECK A FEATURE
// will be deleted later
/*=================================================================*/

import { useState } from "react";

import ModalChangePhotoProfile from "../../../03-organisms/forAuthAndManage/modals/ModalChangePhotoProfile";
import Header from "../../../03-organisms/forAuthAndManage/Header";

export default function TempHome() {
  const [profileMenu, showProfileMenu] = useState(false);
  const [reportsDropdown, showReportsDropdown] = useState(false);
  const [changePhotoModal, showChangePhotoModal] = useState(false);
  const role_id = 1;

  const toggleReportsDropdown = () => {
    showReportsDropdown(!reportsDropdown);
  };

  const closeChangePhotoModal = () => {
    showChangePhotoModal(false);
  };

  const toggleProfileMenu = () => {
    showProfileMenu(!profileMenu);
  };

  const logoutHandler = () => {
    console.log("logged out");
  };

  return (
    <div>
      <Header
        roleId={role_id}
        toggleReportsDropdown={toggleReportsDropdown}
        reportsDropdown={reportsDropdown}
        profileMenu={profileMenu}
        toggleProfileMenu={toggleProfileMenu}
        showChangePhotoModal={showChangePhotoModal}
        logoutHandler={logoutHandler}
      />
      {changePhotoModal && (
        <ModalChangePhotoProfile closeModal={closeChangePhotoModal} />
      )}
    </div>
  );
}
