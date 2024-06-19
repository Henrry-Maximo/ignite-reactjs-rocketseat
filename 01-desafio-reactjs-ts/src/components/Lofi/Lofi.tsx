import { FastForward, MusicNotes, Pause, Play, Rewind } from "phosphor-react";
import styles from "./Lofi.module.css";

export default function Lofi() {
  return (
    <div className={styles.container}>
      <div className={styles.imageMusic}>
        <MusicNotes size={32} />
      </div>
      <div className={styles.wrapper}>
        <div>
          <p><strong>She Will Be Loved</strong></p>
          <p>Maroon 5</p>
        </div>
        <div>
          <div className={styles.wrapperPlay}>
            <button>
              <Rewind size={16} />
            </button>
            <button>
              <Play size={16} />
            </button>
            <button>
              <Pause size={16} />
            </button>
            <button>
              <FastForward size={16} />
            </button>
          </div>
          <div>
            <p>03:28 _______________________ 04:15</p>
          </div>
        </div>
      </div>
    </div>
  );
}
