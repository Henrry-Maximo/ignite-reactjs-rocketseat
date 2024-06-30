import { FastForward, MusicNotes, Pause, Play, Rewind } from "phosphor-react";
import styles from "./Lofi.module.css";
import { useState } from "react";

// SONG DATA
import chillHop from "../../playlist"

export default function Lofi() {
  const tracks = chillHop();

  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  // função anônima que altera o valor booleano utilizado estado
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev)
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageMusic}>
        <MusicNotes size={32} />
      </div>
      <div className={styles.wrapper}>
        <div>
          <p><strong>She Will Be Loved</strong></p>
          <p>Maroon 5</p>
          <audio src={currentTrack.audio} />
        </div>
        <audio />
        <div>
          <div className={styles.wrapperPlay}>
            <button>
              <Rewind size={16} />
            </button>
            {/* executar função para altera resultado quando for clicado */}
            <button onClick={togglePlayPause}>
              {/* alternar entre diferentes icons */}
              {isPlaying ? <Play size={16} /> : <Pause size={16} />}
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
