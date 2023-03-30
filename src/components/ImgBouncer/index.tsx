import "./styles.css";

type ImgBouncerProps = {
  src?: string;
  width?: number;
  height?: number;
};

const ImgBouncer = ({ src = "vite.svg" }) => {
  const width = window.innerWidth / 5;
  const height = window.innerHeight / 5;

  return (
    <div className="box">
      <img src={src} alt="Bouncing Image" style={{ width, height }} />
    </div>
  );
};

export default ImgBouncer;
