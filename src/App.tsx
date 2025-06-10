// import { useEffect } from "react";
import { useRef, useState } from "react";

type Song = {
  id: number;
  title: string;
  artist: string;
  coverUrl: string;
  musicUrl: string;
};

const songs: Song[] = [
  {
  id: 1,
  title: "FIRST LOVE SONG",
  artist: "1",
  coverUrl: "public/ダウンロード (1).jpg",
  musicUrl: "public/FIRST_LOVE_SONG.mp3",
  },
  {
  id: 2,
  title: "FLIGHT FEATHERS",
  artist: "2",
  coverUrl: "public/ダウンロード (2).jpg",
  musicUrl: "public/FLIGHT_FEATHERS.mp3g",
  },
  {
  id: 3,
  title: "Howling over the World",
  artist: "3",
  coverUrl: "public/ダウンロード (3).jpg",
  musicUrl: "public/Howling_over_the_World.mp3",
  },
  {
  id: 4,
  title: "Meteor Light",
  artist: "4",
  coverUrl: "public/ダウンロード (4).jpg",
  musicUrl: "public/Meteor_Light.mp3",
  },
  {
  id: 5,
  title: "ORBITAL BEAT",
  artist: "5",
  coverUrl: "public/ダウンロード (5).jpg",
  musicUrl: "public/ORBITAL_BEAT.mp3",
  }
]

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const currentSong = songs[currentSongIndex];

  const handlePrevious = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
    );
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex + 1) % songs.length
    );
    setIsPlaying(false);
  }

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <div>
      <div>
        <img src={currentSong.coverUrl} alt="" />
      </div>
      <div>
        <h2>{currentSong.title}</h2>
        <p>{currentSong.artist}</p>
      </div>
      <div>
        <button onClick={handleNext}>進む</button>
        <button onClick={togglePlayPause}>
          {isPlaying ? "一時停止" : "再生"}
        </button>
        <button onClick={handlePrevious}>戻る</button>
      </div>
      <audio ref={audioRef} src={currentSong.musicUrl} />
    </div>
  )
}
export default App;
