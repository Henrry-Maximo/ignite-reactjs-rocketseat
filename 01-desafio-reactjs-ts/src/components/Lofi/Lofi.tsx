import { FastForward, Pause, Play, Rewind } from "phosphor-react";
import styles from "./Lofi.module.css";
import { useRef, useState } from "react";

// SONG DATA
import chillHop from "../../playlist";

export default function Lofi() {
  const tracks = chillHop();
  const audioRef = useRef<HTMLAudioElement>(null);

  const [currentTrack] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  // função anônima que altera o valor booleano utilizado estado
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageMusic}>
        <img src={currentTrack.cover} style={{ height: "3.70rem", width: "4rem" }} />
        {/* <MusicNotes size={32} /> */}
      </div>
      <div className={styles.wrapper}>
        <div>
          <p>
            <strong>{currentTrack.name}</strong>
          </p>
          <p>{currentTrack.artist}</p>
          <audio src={currentTrack.audio} ref={audioRef} />
        </div>
        <div>
          <div className={styles.wrapperPlay}>
            <button>
              <Rewind size={16} />
            </button>
            {/* executar função para altera resultado quando for clicado */}
            <button onClick={togglePlayPause}>
              {/* alternar entre diferentes icons */}
              {isPlaying ? <Pause size={16} />  : <Play size={16} /> }
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
