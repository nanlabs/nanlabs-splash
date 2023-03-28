import { useKBar } from "kbar";
import { LottieOptions, useLottie } from "lottie-react";
import { useEffect } from "react";
import { emitter } from "../../events";
import confetti from "./confetti.json";
import confetti2 from "./confetti2.json";

import "./styles.css";

const lottieStyles = {
  width: "100%",
  height: "100%",
};

const options = (animation: unknown): LottieOptions => ({
  animationData: animation,
  loop: false,
  autoplay: true,
});

const LottieConfetti = () => {
  const lottie1 = useLottie(options(confetti), lottieStyles);
  const lottie2 = useLottie(options(confetti), lottieStyles);
  const lottie3 = useLottie(options(confetti2), lottieStyles);

  const play = () => {
    lottie1.setSpeed(0.8);
    lottie2.setSpeed(0.8);
    lottie3.setSpeed(0.8);
    lottie1.goToAndPlay(0);
    lottie2.goToAndPlay(0);
    lottie3.goToAndPlay(0);
  };

  useEffect(() => {
    const unbind = emitter.on("confetti", play);
    return unbind;
  }, []);

  emitter.on("confetti", play);

  return (
    <div className="lottie-container">
      <div style={{ gridColumn: "1 / 10", gridRow: "1 / 17" }}>
        {lottie1.View}
      </div>
      <div style={{ gridColumn: "9 / 17", gridRow: "1 / 17" }}>
        {lottie2.View}
      </div>
      <div style={{ gridColumn: "4 / 14", gridRow: "1 / 17" }}>
        {lottie3.View}
      </div>
    </div>
  );
};

export default LottieConfetti;
