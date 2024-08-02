import { MusicNotes } from 'phosphor-react'
import styles from './Sidebar.module.css'

interface TypeProps {
  currentTrack: {
    name: string
    cover: string
    artist: string
    audio: string
  }
  // declaração do tipo -> propridade de audio HTML
  audioRef: React.RefObject<HTMLAudioElement>
  onLoadedMetadata: () => void
}

export const Sidebar = ({
  currentTrack,
  audioRef,
  onLoadedMetadata,
}: TypeProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageMusic}>
        {currentTrack.cover ? (
          <img
            src={currentTrack.cover}
            className={styles.coverAuthor}
            alt="audio avatar"
          />
        ) : (
          <MusicNotes size={32} />
        )}
      </div>
      <div className={styles.aside}>
        <p>
          <strong>{currentTrack.name}</strong>
        </p>
        <p style={{ color: 'var(--danger)' }}>{currentTrack.artist}</p>
        {/* Utilizar "controls" para layout de controle padrão: <audio controls /> */}
        <audio
          src={currentTrack.audio}
          ref={audioRef}
          onLoadedMetadata={onLoadedMetadata}
        />
      </div>
    </div>
  )
}
