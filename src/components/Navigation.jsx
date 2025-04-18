import css from "../components/Navigation";
import { Navigate } from "react-router-dom";

const Navigation = () => (
  <nav className={css.nav}>
    <Navigate
      to="/"
      className={({ isActive }) => (isActive ? css.active : css.link)}
    >
      Home
    </Navigate>
    <Navigate
      to="/movies"
      className={({ isActive }) => (isActive ? css.active : css.link)}
    >
      Movies
    </Navigate>
  </nav>
);

export default Navigation;
