import { useState } from "react";

import { Button } from "../../shared/UI";

type Props = {
  audioSrc: string;
};

export const AudioPlayer: React.FC<Props> = ({ audioSrc }) => {
  const [src, setSrc] = useState<string>("");

  const loadAudio = async () => {
    const response = await fetch(audioSrc);
    const blob = await response.blob();
    setSrc(URL.createObjectURL(blob));
  };

  return (
    <div>
      <Button onClick={loadAudio}> Загрузить аудио </Button>
      <audio>
        <source src={src} />
        Ваш браузер не поддерживает данный вид воспроизведения
      </audio>
    </div>
  );
};
