import "./styles.css";

export default function ImageContainer({
  imgSource = "",
  shape = "rectangle",
  id = "",
}) {
  return (
    <div className={`image-container d-flex-row ${shape}`}>
      <img src={imgSource} alt="" id={id} />
    </div>
  );
}
