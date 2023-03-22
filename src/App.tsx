import React, { FC, ReactNode } from "react";
import "./App.css";
import { SvgBlob } from "./components/Blobs";

const Splash = () => (
  <div className="splash">
    {" "}
    <div style={{ gridColumn: "2 / 5", gridRow: "4 / 6" }}>
      <SvgBlob patternId={0} />
    </div>
    <div style={{ gridColumn: "10 / 13", gridRow: "10 / 13" }}>
      <SvgBlob patternId={1} />
    </div>
    <div style={{ gridColumn: "3 / 6", gridRow: "9 / 12" }}>
      <SvgBlob patternId={2} />
    </div>
    <div style={{ gridColumn: "1 / 4", gridRow: "1 / 4" }}>
      <SvgBlob patternId={3} />
    </div>
    <div style={{ gridColumn: "12 / 15", gridRow: "12 / 15" }}>
      <SvgBlob patternId={4} />
    </div>
    <div style={{ gridColumn: "11 / 14", gridRow: "4 / 8" }}>
      <SvgBlob patternId={5} />
    </div>
    <div style={{ gridColumn: "13 / 16", gridRow: "1 / 4" }}>
      <SvgBlob patternId={6} />
    </div>
    <div style={{ gridColumn: "7 / 10", gridRow: "11 / 14" }}>
      <SvgBlob patternId={7} />
    </div>
    <div style={{ gridColumn: "6 / 9", gridRow: "2 / 5" }}>
      <SvgBlob patternId={8} />
    </div>
    <div style={{ gridColumn: "14 / 17", gridRow: "8 / 11" }}>
      <SvgBlob patternId={9} />
    </div>
    <div style={{ gridColumn: "1 / 4", gridRow: "12 / 15" }}>
      <SvgBlob patternId={10} />
    </div>
    <div style={{ gridColumn: "5 / 8", gridRow: "7 / 10" }}>
      <SvgBlob patternId={12} />
    </div>
  </div>
);

const Background: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="background">
      <div className="content">{children}</div>
      <div className="splash-container">
        <Splash />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Background>
      <main>
        <h1>I love what I do</h1>
        <h2>we love what we do</h2>
        <strong>it shows</strong>
      </main>
    </Background>
  );
};

export default App;
