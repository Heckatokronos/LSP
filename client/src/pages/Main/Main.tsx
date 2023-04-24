import { Item } from "../../shared/UI";

const DUMMY_DATA = [
  {
    name: "My first podcast",
    author: "Dmitry",
    description: "Записал никому не нужный подкаст, послушайте бажожда",
    audio: "https://soundcloud.com/sonderistic/18-p-t-adamczyk-never-fade",
  },
  {
    name: "Фристайл для моих подписчиков",
    author: "Марк",
    description: "Мой демо рэп трек, решил обсудить его в формате подкаста",
    audio: "https://song.link/ru/i/1218584504",
  },
  {
    name: "Работаем на Ruby",
    author: "Александр",
    description:
      "Подкаст о том, как я пошел работать в друпал и не понял, почему друид и паладин норм пачка",
    audio: "https://song.link/ru/i/1442544751",
  },
];

function Main() {
  return (
    <>
      {DUMMY_DATA.map(({ name, author, description, audio }) => (
        <Item
          key={name}
          name={name}
          author={author}
          description={description}
          audioSrc={audio}
        />
      ))}
    </>
  );
}

export default Main;
