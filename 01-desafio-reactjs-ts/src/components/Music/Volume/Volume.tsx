import { SpeakerSimpleHigh } from "phosphor-react";
import styles from "./Volume.module.css";

interface PropsType {
  volume: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Volume({ volume, onChange }: PropsType ) {
  return (
    <div
    className={styles.volume} style={{ display: "flex", gap: "2px", alignItems: "center", margin: "auto" }}
    >
      <SpeakerSimpleHigh size={16} />
      <input
        type="range"
        min={0}
        max={100}
        style={{
          background: `linear-gradient(to right, var(--purple) ${volume}%, #ccc ${volume}%)`,
        }}
        value={volume}
        onChange={onChange}
      />
    </div>
  );
}
