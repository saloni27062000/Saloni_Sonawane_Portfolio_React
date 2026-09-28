import { Link, NavLink } from "react-router-dom";
import { NAV, SITE } from "../data/site.js";
import SocialLinks from "./SocialLinks.jsx";

export default function Header({ navOpen, onToggleNav, onNavigate }) {
  return (
    <header id="header" className="header d-flex align-items-center light-background sticky-top">
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">{SITE.name}</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) => (isActive ? "active" : undefined)}
                  onClick={onNavigate}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <i
            className={`mobile-nav-toggle d-xl-none bi ${navOpen ? "bi-x" : "bi-list"}`}
            role="button"
            aria-label="Toggle navigation"
            aria-expanded={navOpen}
            onClick={onToggleNav}
          />
        </nav>

        <SocialLinks className="header-social-links" />
      </div>
    </header>
  );
}
