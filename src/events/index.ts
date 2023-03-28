import { createNanoEvents } from "nanoevents";

type Events = {
  confetti: () => void;
  blur: (value: number) => void;
};

export const emitter = createNanoEvents<Events>();
