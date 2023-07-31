import { useState } from "react";
import ModalChangePhotoProfile from "../../../03-organisms/forAuthAndManage/modals/ModalChangePhotoProfile";

export default function TempHome() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  return (
    <div>
      <button onClick={openModal}>change photo profile</button>
      {isModalOpened && <ModalChangePhotoProfile closeModal={closeModal} />}
    </div>
  );
}
