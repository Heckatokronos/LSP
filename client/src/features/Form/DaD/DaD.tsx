import { useState } from "react";
import { Button } from "../../../shared/UI";

import "./DaD.scss";

interface Props {
  onUpload: (
    file: File,
    setUploadProgress: React.Dispatch<React.SetStateAction<number>>
  ) => void;
}

export const Upload: React.FC<Props> = ({ onUpload }) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploading, setUploading] = useState<boolean>(false);
  const [paused, setPaused] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
      onUpload(files[0], setUploadProgress);
    }
  };

  const handleCloseClick = () => {
    setFile(null);
    setUploading(false);
    setUploadProgress(0);
    setPaused(false);
  };

  const handlePauseClick = () => {
    setPaused(true);
  };

  const handleResumeClick = () => {
    setPaused(false);
    onUpload(file!, setUploadProgress);
  };

  return (
    <div>
      <input
        type="file"
        accept="audio/*, video/*"
        onChange={handleFileChange}
      />
      {file && <p> Выбранный файл {file.name} </p>}
      {!file && <p> Нет загруженных файлов </p>}
      {uploading && (
        <div>
          <progress value={uploadProgress} max="100" />
          {!paused && <Button onClick={handlePauseClick}>Остановить</Button>}
          {paused && <Button onClick={handleResumeClick}>Возобновить</Button>}
          <Button onClick={handleCloseClick}>Прекратить</Button>
        </div>
      )}
    </div>
  );
};
