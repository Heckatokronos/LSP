import { FC } from "react";
import "./Card.scss";

interface CardProps {
  children: React.ReactNode;
  className: string;
}

export const Card: FC<CardProps> = ({ children, className }, props) => {
  const classes = "card " + className;

  return <div className={classes}>{children}</div>;
};
