import "./styles.css";

export default function ImageContainer({
  imgSource = "",
  shape = "rectangle",
}) {
  return (
    <div className={`product-image-preview d-flex-row ${shape}`}>
      <img src={imgSource} alt="" />
    </div>
  );
}
