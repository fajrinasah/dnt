import { useState } from "react";

import ModalChangePhotoProfile from "../../../03-organisms/forAuthAndManage/modals/ModalChangePhotoProfile";
import ModalAddCashier from "../../../03-organisms/forAuthAndManage/modals/cashiers/ModalAddCashier";
import ModalEditCashier from "../../../03-organisms/forAuthAndManage/modals/cashiers/ModalEditCashier";

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
      {/* {isModalOpened && <ModalAddCashier closeModal={closeModal} />} */}
      {isModalOpened && (
        <ModalEditCashier
          closeModal={closeModal}
          cashierPhoto={null}
          joinedDate="2023-07-28T14:27:12.000Z"
          cashierUsername="user1"
          cashierCurrentEmail="vani.kani@allfreemail.net"
          cashierStatus="2"
        />
      )}
    </div>
  );
}
