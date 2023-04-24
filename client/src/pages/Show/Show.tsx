import { AudioPlayer } from "../../features";

type Props = {
  link: string;
};

function Show({ link }: Props) {
  return (
    <>
      <AudioPlayer audioSrc={link} />
    </>
  );
}

export default Show;
