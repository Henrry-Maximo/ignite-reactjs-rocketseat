import {
  FastForward,
  Pause,
  Play,
  Rewind,
  SkipBack,
  SkipForward,
} from "phosphor-react";
import styles from "./Lofi.module.css";
import { useCallback, useEffect, useRef, useState } from "react";

// SONG DATA
import chillHop from "../../playlist";
import { Sidebar } from "./Sidebar/Sidebar";
import { Progress } from "./Progress/Progress";
import { Volume } from "./Volume/Volume";
import { Toggle } from "./Toggle/Toggle";

export default function Lofi() {
  // Utilizando a função chillHop, recebendo os valores em Json (Array)
  const tracks = chillHop();
  // rastrear índice da faixa em reprodução atual
  const [trackIndex, setTrackIndex] = useState(0);

  // métodos e propriedades do elemento <audio> retornados pelo ref
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);

  // Inicilizando primeira track da lista
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);

  const [isPlaying, setIsPlaying] = useState(false);

  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const playAnimationRef = useRef(0);

  // funcionalidade de volume inicializado com o valor 60
  const [volume, setVolume] = useState(50);
  // console.log(volume);

  const repeat = useCallback(() => {
    // playAnimationRef.current = requestAnimationFrame(repeat);
    const currentTime = audioRef.current?.currentTime;
    if (currentTime !== undefined) {
      setTimeProgress(currentTime);
      if (progressBarRef.current) {
        progressBarRef.current.value = currentTime.toString();
        progressBarRef.current.style.setProperty(
          "--range-progress",
          `${(currentTime / duration) * 100}%`
        );
        playAnimationRef.current = requestAnimationFrame(repeat);
      }
    }
  }, [audioRef, setTimeProgress, duration, progressBarRef]);

  useEffect(() => {
    if (isPlaying) {
      playAnimationRef.current = requestAnimationFrame(repeat);
    } else {
      cancelAnimationFrame(playAnimationRef.current);
    }
    // return () => cancelAnimationFrame(playAnimationRef.current);
  }, [isPlaying, repeat]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

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
    if (seconds && progressBarRef.current) {
      setDuration(seconds);
      progressBarRef.current.max = seconds.toString();
    }
  };

  // const formatTime = (time: number) => {
  //   if (time && !isNaN(time)) {
  //     const minutes = Math.floor(time / 60);
  //     const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  //     const seconds = Math.floor(time % 60);
  //     const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  //     return `${formatMinutes}:${formatSeconds}`;
  //   }
  //   return "00:00";
  // };

  // useEffect(() => {
  //   if (isPlaying) {
  //     audioRef.current?.pause();
  //   } else {
  //     audioRef.current?.play();
  //   }
  // }, [isPlaying, audioRef])

  // const skipForward = () => {};

  // const skipBackward = () => {};

  /* 
  whenever we click the “next” button, we check if we are in the last index — i.e., 
  the last track. Then, we set the index to 0 — i.e., the first track — and reset 
  the track to the first item in the playlist. Otherwise, we set the index and the 
  track to the next one in the playlist.
  */

  const handlePrevious = () => {
    if (trackIndex === 0) {
      const lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
  };

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
      audioRef.current?.pause();
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 15;
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 15;
    }
  };

  const toggleEventHandlerMusic = isPlaying ? <Pause size={16} /> : <Play size={16} />

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <Sidebar currentTrack={currentTrack} audioRef={audioRef} onLoadedMetadata={onLoadedMetadata} />
        <div>
          <div className={styles.wrapperPlay}>
            <Toggle HandlerEventMusic={skipBackward} icon={<SkipBack size={16}/>} />
            <Toggle HandlerEventMusic={handlePrevious} icon={<Rewind size={16}/>} />
            <Toggle HandlerEventMusic={togglePlayPause} icon={toggleEventHandlerMusic} />
            <Toggle HandlerEventMusic={handleNext} icon={<FastForward size={16} />} />
            <Toggle HandlerEventMusic={skipForward} icon={<SkipForward size={16} />} />
            <Volume volume={volume} onChange={(e) => setVolume(Number(e.target.value))} />
          </div>
          <Progress timeProgress={timeProgress} progressBarRef={progressBarRef} handleProgressChange={handleProgressChange} duration={duration} />
        </div>
      </div>
    </div>
  );
}
