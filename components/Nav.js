import Link from "next/link";
import navStyled from "../styles/Nav.module.css";
const Nav = () => {
  return (
    <nav className={navStyled.nav}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/photos">
            <a>Photos</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
