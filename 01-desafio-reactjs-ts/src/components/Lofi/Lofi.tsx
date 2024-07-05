import { FastForward, MusicNotes, Pause, Play, Rewind } from "phosphor-react";
import styles from "./Lofi.module.css";
import { useCallback, useEffect, useRef, useState } from "react";

// SONG DATA
import chillHop from "../../playlist";

export default function Lofi() {
  // Utilizando a função chillHop, recebendo os valores em Json (Array)
  const tracks = chillHop();

  // métodos e propriedades do elemento <audio> retornados pelo ref
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);

  // Inicilizando primeira track da lista
  const [currentTrack] = useState(tracks[0]);

  const [isPlaying, setIsPlaying] = useState(false);

  const [timeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const playAnimationRef  = useRef(0)

  const repeat = useCallback(() => {
    console.log('run');
  
    playAnimationRef.current = requestAnimationFrame(repeat);
    console.log(playAnimationRef)
  }, []);

  useEffect(() => {
    if (isPlaying) {
      playAnimationRef.current = requestAnimationFrame(repeat);
    } else {
      cancelAnimationFrame(playAnimationRef.current);
    }
    // return () => cancelAnimationFrame(playAnimationRef.current);
  }, [isPlaying, repeat]);

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

  const handleProgressChange = () => {
    // console.log(progressBarRef.current?.value);
    // console.log(audioRef.current?.currentTime)
    if (audioRef.current && progressBarRef.current) {
      audioRef.current.currentTime = parseInt(progressBarRef.current.value);
    }
  };

  const onLoadedMetadata = () => {
    const seconds = audioRef.current?.duration;
    if (seconds && progressBarRef.current){
      setDuration(seconds);
      progressBarRef.current.max = seconds.toString();
    }
  };

  const formatTime = (time: number) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes =
        minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds =
        seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
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
            style={{
              height: "100%",
              width: "4rem",
              border: "1px solid var(--gray-100)",
            }}
            alt="audio avatar"
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
          <p style={{ color: "var(--danger)" }}>{currentTrack.artist}</p>
          {/* Utilizar "controls" para layout de controle padrão: <audio controls /> */}
          <audio src={currentTrack.audio} ref={audioRef} onLoadedMetadata={onLoadedMetadata}/>
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
          <div className={styles.progress}>
            <span className="time current">{formatTime(timeProgress)}</span>
            <input
              type="range"
              ref={progressBarRef}
              defaultValue="0"
              onChange={handleProgressChange}
            />
            <span className="time">{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
