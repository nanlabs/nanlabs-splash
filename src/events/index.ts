import { createNanoEvents } from 'nanoevents';

type Events = {
  confetti: () => void;
  confettiInLoop: (delay: number | null) => void;
  blur: (value: number) => void;
};

export const emitter = createNanoEvents<Events>();
