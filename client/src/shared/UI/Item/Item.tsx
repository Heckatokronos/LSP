import { FC } from "react";

import { Card } from "../Card/Card";

import "./Item.scss";
import { Button } from "../Button/Button";

type ItemProps = {
  name: string;
  author: string;
  description: string;
  audioSrc: string;
};

export const Item: FC<ItemProps> = ({ name, author, description }) => {
  return (
    <Card className="div">
      <main>
        <h2>{name}</h2>
        <h3>{author}</h3>
        <span>{description}</span>
        <br />
        <Button>Прослушать</Button>
      </main>
    </Card>
  );
};
