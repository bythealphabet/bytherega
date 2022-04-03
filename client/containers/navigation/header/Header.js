import React, { useState, useEffect, useContext } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { AuthContext } from "../../../auth/AuthContext/AuthContext";
import { useLocation, Link, useHistory } from "react-router-dom";
import { Hamburger } from "../../../components/header/hamburger/Hamburger";
import { Logo } from "../../../components/logo/Logo";
import { Menu } from "../../../components/header/menu/Menu";
import { stopScroll, startScroll } from "./header-helper";
import SunMoon from "../../../components/header/icons/LightDark";

const links = [
  { name: "Advies", path: "/projects", btn: false },
  { name: "Doelstellingen", path: "/", btn: false },
  { name: "Producten", path: "/", btn: false },
  { name: "Wetenschap", path: "/", btn: false },
];

function Header() {
  const { auth, signOutHandler } = useContext(AuthContext);
  const [active, setActive] = useState(false);
  const location = useLocation();

  const hamburgerHandler = () => {
    active ? startScroll() : stopScroll();
    setActive((prev) => !prev);
  };

  useEffect(() => {
    startScroll();
    setActive(false);
  }, [location]);

  return (
    <header className="base-grid" css={headerStyles}>
      <Logo
        active={active}
        position={css`
          grid-column: 2 / -2;
          grid-row: 1 / -1;
          align-self: center;
          justify-self: center;
          margin-top: 0.3em;
          width: 100px;
          height: 100px;

          @media (min-width: 900px) {
            grid-column: 2 / -2;
          }
        `}
      />
      <SunMoon
        position={css`
          z-index: 12;
          grid-column: 6 / span 1;
          grid-row: 1 / -1;
          justify-self: center;
          align-self: center;
          @media (min-width: 900px) {
            grid-column: 14 / span 2;
          }
        `}
      />
      <Menu
        links={links}
        signout={signOutHandler}
        userAuth={auth}
        active={active}
        position={css`
          grid-column: 1 / -1;
          grid-row: 1 / -1;
        `}
      />

      <Hamburger
        active={active}
        setActive={hamburgerHandler}
        position={css`
          grid-column: -3 / span 2;
          align-self: center;
          grid-row: 1 / -1;
        `}
      />
    </header>
  );
}
export default Header;

//////// STYLES

function headerStyles() {
  return css`
    display: grid;
    grid-template-rows: repeat(2, calc(var(--headerHeight) / 2));
    height: var(--headerHeight);
    grid-column: 1 / -1;
    grid-row: 1;
  `;
}
