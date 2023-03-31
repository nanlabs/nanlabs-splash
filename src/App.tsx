import React, { FC, ReactNode } from 'react';
import './App.css';
import CommandBarProvider from '@/components/CommandBar';
import LottieConfetti from '@/components/LottieConfetti';
import Sparkles from '@/components/Sparkles';
import Splash from '@/components/Splash';
import { CoolTitle1, CoolTitle2, CoolTitle3 } from '@/components/CoolTitle';
import ImgBouncer from '@/components/ImgBouncer';

const Background: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="background">
      <div className="content">{children}</div>
      <div className="splash-container">
        <LottieConfetti />
        <Splash />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <CommandBarProvider>
      <Background>
        <main>
          <CoolTitle1 />

          {/* <CoolTitle2 text="we love" /> */}
          {/* <h2>I love what I do</h2>
          <CoolTitle3 text="we love what we do" />
          <br />
          <h3>
            <strong>
              <Sparkles>it shows</Sparkles>
            </strong>
          </h3> */}
        </main>
        <ImgBouncer src={'nan10.png'} />
      </Background>
    </CommandBarProvider>
  );
};

export default App;
