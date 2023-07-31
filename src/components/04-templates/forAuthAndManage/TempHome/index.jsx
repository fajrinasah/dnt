import { useState } from "react";

import ModalChangePhotoProfile from "../../../03-organisms/forAuthAndManage/modals/ModalChangePhotoProfile";
import ModalAddCashier from "../../../03-organisms/forAuthAndManage/modals/cashiers/ModalAddCashier";

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
      <button onClick={openModal}>open modal</button>
      {/* {isModalOpened && <ModalChangePhotoProfile closeModal={closeModal} />} */}
      {isModalOpened && <ModalAddCashier closeModal={closeModal} />}
    </div>
  );
}
