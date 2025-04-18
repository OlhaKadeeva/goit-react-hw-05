import css from "../components/Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav className={css.nav}>
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? css.active : css.link)}
    >
      Home
    </NavLink>
    <NavLink
      to="/movies"
      className={({ isActive }) => (isActive ? css.active : css.link)}
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
