import React, { FC, ReactNode } from "react";
import "./App.css";
import Messages, { SendMessage } from "./components/Messages";
import Sparkles from "./components/Sparkles";
import Splash from "./components/Splash";

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
        <strong>
          it <Sparkles>shows</Sparkles>
        </strong>
      </main>
      <Messages />
      <SendMessage />
    </Background>
  );
};

export default App;
