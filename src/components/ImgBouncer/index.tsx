import './styles.css';

type ImgBouncerProps = {
  src?: string;
};

const ImgBouncer = ({ src = 'vite.svg' }: ImgBouncerProps) => {
  const width = window.innerWidth / 8;
  const top = Math.random() * window.innerHeight;
  const left = Math.random() * (window.innerWidth - width);

  return (
    <div className="box">
      <img src={src} alt="bouncing-image" style={{ width, top, left }} />
    </div>
  );
};

export default ImgBouncer;
