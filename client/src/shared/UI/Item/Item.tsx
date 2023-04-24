import { FC } from "react";

import "./Item.scss";

interface ItemProps {
  name: string;
  author: string;
  description: string;
  children: React.ReactNode;
}

export const Item: FC<ItemProps> = ({ name, author, description }) => {
  return (
    <div className="div">
      <h1>{name}</h1>
      <h2>{author}</h2>
      <span>{description}</span>
    </div>
  );
};
