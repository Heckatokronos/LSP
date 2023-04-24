import pages from "./pages/pages";
import { Item } from "./item/item";

import "./Navbar.scss";

export const Navbar = () => {
  return (
    <nav className="nav">
      <h1> Listening Someone Podcasts </h1>
      <ul>
        {pages.map(({ label, to }) => (
          <Item label={label} link={to} />
        ))}
      </ul>
    </nav>
  );
};
