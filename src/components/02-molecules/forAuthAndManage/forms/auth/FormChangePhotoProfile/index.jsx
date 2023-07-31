import InputFileCustom from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputFileCustom";
import InputSubmit from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSubmit";

export default function FormChangePhotoProfile({
  uploadPhotoHandler = () => {},
  changePhotoHandler = () => {},
  disabled,
}) {
  return (
    <form className="form change-photo-profile" onSubmit={uploadPhotoHandler}>
      <InputFileCustom
        accept="image/jpg, image/jpeg, image/png, image/gif, image/JPG, image/JPEG, image/PNG, image/GIF, .jpg, .jpeg, .png, .gif"
        buttonContent="Choose photo"
        onChange={changePhotoHandler}
      />
      <InputSubmit
        value="Save changes"
        story="ghost-main"
        width="full"
        disabled={disabled}
      />
    </form>
  );
}
