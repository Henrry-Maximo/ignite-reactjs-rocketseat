import styles from "./Progress.module.css";

interface TypeProps {
  timeProgress: number,
  progressBarRef: React.RefObject<HTMLInputElement>,
  handleProgressChange: () => void,
  duration: number
}

export const Progress = ({ timeProgress, progressBarRef, handleProgressChange, duration }: TypeProps) => {
  const formatTime = (time: number) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  return (
    <div className={styles.progress}>
      <span>{formatTime(timeProgress)}</span>
      <input
        type="range"
        ref={progressBarRef}
        defaultValue="0"
        onChange={handleProgressChange}
      />
      <span>{formatTime(duration)}</span>
    </div>
  );
};
