import { FC, ReactNode, useEffect, useRef } from "react";
import "./styles.css";

type AnimatedImageProps = {
  src?: string;
  width?: number;
  height?: number;
};

const BouncingBall = ({ src = "vite.svg" }) => {
  const width = window.innerWidth / 5;
  const height = window.innerHeight / 5;

  return (
    <div className="box">
      <img src={src} alt="Bouncing Image" style={{ width, height }} />
    </div>
  );
};

export default BouncingBall;
