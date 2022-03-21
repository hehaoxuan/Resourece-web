import ReactPlayer from 'react-player';
import { useState } from 'react';
import style from './index.less'
export default function video() {
  const [playing,setPlaying] = useState(false)
  const play = () => {
    setPlaying(!playing)
  };
  return (
    <div>
      <ReactPlayer
        url="http://localhost:8081/video?name=123"
        controls={true}
        className ={style.video}
      />
      <div></div>
    </div>
  );
}
