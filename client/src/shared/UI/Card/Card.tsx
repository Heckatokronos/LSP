import { FC } from "react";
import "./Card.scss";

interface CardProps {
  children: React.ReactNode;
}

export const Card: FC<CardProps> = ({ children }, props) => {
  const classes = "card " + props.className;

  return <div className={classes}>{children}</div>;
};
