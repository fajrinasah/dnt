import { useDispatch } from "react-redux";
import { Formik } from "formik";
import Moment from "react-moment";

import { emailValidationSchema } from "../../../../../../validationSchemata";
import {
  editEmailCashier,
  inactivateCashier,
} from "../../../../../../store/slices/manageCashiers/thunks";

import TitleSection from "../../../../../01-atoms/forAuthAndManage/texts/titles/TitleSection";
import ImageContainer from "../../../../../01-atoms/forAuthAndManage/ImageContainer";
import InputText from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputText";
import FormEditEmailCashier from "../../../../../02-molecules/forAuthAndManage/forms/cashiers/FormEditEmailCashier";
import ButtonStandard from "../../../../../01-atoms/forAuthAndManage/buttons/ButtonStandard";
import ModalConfirmation from "../../ModalConfirmation";

import "../../styles.css";
import "./styles.css";
import { useState } from "react";

export default function ModalEditCashier({
  closeModal = () => {},
  cashierPhoto,
  joinedDate,
  cashierUsername,
  cashierCurrentEmail,
  cashierStatus,
}) {
  const dispatch = useDispatch();

  /*=====================LOCAL STATE=============================*/
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [modalConfirmation, setModalConfirmation] = useState(false);

  const changeEmailHandler = () => {
    setIsReadOnly(false);
  };

  const cancelChangeEmail = () => {
    setIsReadOnly(true);
  };

  const showModalConfirmation = () => {
    setModalConfirmation(true);
  };

  const closeModalConfirmation = () => {
    setModalConfirmation(false);
  };

  const inactivateHandler = () => {
    dispatch(inactivateCashier(cashierUsername)).then(() => {
      window.location.reload();
    });
  };

  return (
    <div className="modal-background edit-cashier">
      <section className="modal edit-cashier d-flex-col">
        <TitleSection
          content={isReadOnly ? "Cashier's Data" : "Edit Cashier"}
          border="main"
          size="medium"
        />

        <ImageContainer
          imgSource={
            cashierPhoto
              ? cashierPhoto
              : "https://res.cloudinary.com/dpdgmr3xw/image/upload/v1690682252/users/default.png"
          }
          shape="circle"
        />

        <div className="joined-date d-flex-row">
          <p>Joined us since</p>
          <Moment format="MMMM Do YYYY">{joinedDate}</Moment>
        </div>

        <InputText
          id="input-cashier-username"
          flexDirection="row"
          color="main"
          inputId="cashier-username"
          labelText="Username"
          required={false}
          inputName="cashier-username"
          defaultValue={cashierUsername}
          readOnly={true}
        />

        <Formik
          initialValues={{
            email: cashierCurrentEmail,
          }}
          validationSchema={emailValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            try {
              dispatch(
                editEmailCashier({
                  username: cashierUsername,
                  email: values.email,
                })
              ).then(() => {
                window.location.reload();
              });

              console.log(`DISPATCHED: send edit cashier's email request`);

              setSubmitting(false);
            } catch (error) {
              console.log("error", error?.message);
              return { message: error?.message };
            }
          }}
        >
          {({
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <FormEditEmailCashier
              isReadOnly={isReadOnly}
              currentEmail={cashierCurrentEmail}
              onSubmit={handleSubmit}
              handleBlur={handleBlur}
              handleChange={handleChange}
              isSubmitting={isSubmitting}
              emailTouched={touched.email}
              emailErrors={errors.email}
              emailValue={values.email}
              changeHandler={changeEmailHandler}
              cancelHandler={cancelChangeEmail}
            />
          )}
        </Formik>

        <InputText
          id="input-cashier-status"
          flexDirection="row"
          color="main"
          inputId="cashier-status"
          labelText="Status"
          required={false}
          inputName="cashier-status"
          defaultValue={
            cashierStatus == 1
              ? "Unverified"
              : cashierStatus == 2
              ? "Active"
              : "Inactive"
          }
          readOnly={true}
        />

        <div className="buttons-container d-flex-col">
          <ButtonStandard
            story="raised-warning"
            bold="bold"
            width="full"
            content="Inactivate"
            onClick={showModalConfirmation}
            disabled={cashierStatus != 2}
          />
          {modalConfirmation && (
            <ModalConfirmation
              type="warning"
              confirmationContent="inactivate this cashier"
              confirmationDetails="Once you inactivated a cashier, you cannot reactivate that cashier."
              actionName="Inactivate"
              cancelHandler={closeModalConfirmation}
              confirmHandler={inactivateHandler}
            />
          )}

          <ButtonStandard
            story="flat"
            content="Back"
            bold=""
            width="full"
            onClick={closeModal}
          />
        </div>
      </section>
    </div>
  );
}
