import { Navbar } from "./Navbar";

import "./Layout.scss";

interface Props {
  children?: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }, props) => {
  const classes = "main " + props.className;

  return (
    <>
      <Navbar />
      <main className={classes}>{children}</main>
    </>
  );
};
