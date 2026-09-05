import { Move } from "chess.js";

let audioContext: AudioContext | null = null;
let timeout: ReturnType<typeof setTimeout> | null = null;
const soundsCache = new Map<string, AudioBuffer>();

type Sound = "move" | "capture" | "illegalMove";
const soundUrls: Record<Sound, string> = {
  move: "/sounds/move.mp3",
  capture: "/sounds/capture.mp3",
  illegalMove: "/sounds/error.mp3",
};
export const play = async (sound: Sound) => {
  if (typeof window === "undefined") return;
  if (timeout) clearTimeout(timeout);

  timeout = setTimeout(async () => {
    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (!AudioContextClass) return;

      if (!audioContext) audioContext = new AudioContextClass();
      if (audioContext.state === "suspended") {
        await audioContext.resume().catch(() => {});
      }
      if (audioContext.state !== "running") return;

      let audioBuffer = soundsCache.get(soundUrls[sound]);
      if (!audioBuffer) {
        const res = await fetch(soundUrls[sound]);
        if (!res.ok) return;
        const arrayBuf = await res.arrayBuffer();
        audioBuffer = await audioContext.decodeAudioData(arrayBuf);
        soundsCache.set(soundUrls[sound], audioBuffer);
      }

      const audioSrc = audioContext.createBufferSource();
      audioSrc.buffer = audioBuffer;
      const volume = audioContext.createGain();
      volume.gain.value = 0.3;
      audioSrc.connect(volume);
      volume.connect(audioContext.destination);
      audioSrc.start();
    } catch (error) {
      // Safely ignore autoplay restrictions or audio loading errors
    }
  }, 25);
};

export const playCaptureSound = () => play("capture");
export const playIllegalMoveSound = () => play("illegalMove");
export const playMoveSound = () => play("move");

export const playSoundFromMove = (move: Move | null) => {
  if (!move) return playIllegalMoveSound();
  if (move.captured) return playCaptureSound();
  return playMoveSound();
};
