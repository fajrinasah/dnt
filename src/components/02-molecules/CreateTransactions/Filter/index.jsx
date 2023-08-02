/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/
import { useState } from "react";

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import "./styles.css";
import { Button, Modal, TextInput } from "flowbite-react";

// export default function Filter() {
//   const [openModal, setOpenModal] = useState("");
//   const props = { openModal, setOpenModal };


//   return (
//     <>
//       <Button onClick={() => setOpenModal('dismissible')}>Toggle modal</Button>
      
//     </>
//   );
// }

const ModalButton = ({ onClick }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleButtonClick = () => {
    setOpenModal(true);
    if (onClick) {
      onClick(); // Call the onClick function from the parent component
    }
  };

  return (
    <>
      
    </>
  );
};

export default function Filter() {
  const handleModalButtonClick = () => {
    console.log("Modal button clicked!"); // Customize the behavior of the button in the parent component
  };

  return (
    <>
      {/* Reuse the ModalButton component */}
      <ModalButton onClick={handleModalButtonClick} />
    </>
  );
}