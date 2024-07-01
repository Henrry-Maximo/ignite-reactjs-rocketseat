import { FastForward, MusicNotes, Pause, Play, Rewind } from "phosphor-react";
import styles from "./Lofi.module.css";
import { useRef, useState } from "react";

// SONG DATA
import chillHop from "../../playlist";

export default function Lofi() {
  // Utilizando a função chillHop, recebendo os valores em Json (Array)
  const tracks = chillHop();

  // métodos e propriedades do elemento <audio> retornados pelo ref
  const audioRef = useRef<HTMLAudioElement>(null);

  // Inicilizando primeira track da lista
  const [currentTrack] = useState(tracks[0]);

  const [isPlaying, setIsPlaying] = useState(false);

  /* 
  # função chamada ao botão de play/pause ser pressionado
  se valor do botão for false e for pressionado, executar
  instrução else para dar o play, atribuindo o valor de verdadeiro.
  se o valor do botão for verdadeiro e for pressionado, executar a
  instrução if para dar pause, atribuindo o valor de falso.
  */
  const togglePlayPause = () => {
    if (isPlaying) {
      // métodos play()/pause() proporcionados pelo elemento <audio>
      // variável de referência / objeto current / métodos
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  // useEffect(() => {
  //   if (isPlaying) {
  //     audioRef.current?.pause();
  //   } else {
  //     audioRef.current?.play();
  //   }
  // }, [isPlaying, audioRef])

  return (
    <div className={styles.container}>
      <div className={styles.imageMusic}>
        {currentTrack.cover ? (
          <img
            src={currentTrack.cover}
            style={{ height: "3.70rem", width: "4rem" }}
          />
        ) : (
          <MusicNotes size={32} />
        )}
      </div>
      <div className={styles.wrapper}>
        <div>
          <p>
            <strong>{currentTrack.name}</strong>
          </p>
          <p>{currentTrack.artist}</p>
          {/* Utilizar "controls" para layout de controle padrão: <audio controls /> */}
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
              {/* verdadeiro: pause / falso: play */}
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
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
