import pages from "./pages/pages";
import { Item } from "./item/item";

import "./Navbar.scss";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <h1> Listening Someone Podcasts </h1>
      </Link>
      <ul>
        {pages.map(({ label, to }) => (
          <Item key={label} label={label} link={to} />
        ))}
      </ul>
    </nav>
  );
};
