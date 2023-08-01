import ButtonStandard from "../../../../../01-atoms/forAuthAndManage/buttons/ButtonStandard";
import InputFileCustom from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputFileCustom";
import InputSubmit from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSubmit";

export default function FormEditImageProduct({
  uploadImageHandler = () => {},
  changeImageHandler = () => {},
  cancelUploadImage = () => {},
  image,
}) {
  return (
    <form className="form edit-image-product" onSubmit={uploadImageHandler}>
      <InputFileCustom
        accept="image/jpg, image/jpeg, image/png, image/gif, image/JPG, image/JPEG, image/PNG, image/GIF, .jpg, .jpeg, .png, .gif"
        buttonContent="Choose image"
        onChange={changeImageHandler}
      />

      <InputSubmit
        value="Save changes"
        story="ghost-main"
        width="full"
        disabled={!image}
      />

      <ButtonStandard
        id="button-cancel-upload"
        story="flat"
        content="Cancel upload"
        bold=""
        width="full"
        onClick={cancelUploadImage}
        disabled={!image}
      />
    </form>
  );
}
