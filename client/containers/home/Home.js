import React from "react";
import { jsx, css, keyframes } from "@emotion/react"; /** @jsx jsx */
import { Link } from "react-router-dom";
import HomeHero from "./HomeHero";
import HomeProjects from "./HomeProjects";
import { projectInfoArray } from "../projects/projectsInfo";

function Home() {
  const pulse = keyframes`
    from {
        transform: scale(1);
        filter: opacity(0.9);
  }     
to {
      transform: scale(2);
      filter: opacity(0);
  }`;

  return (
    <main className="base-grid" css={homeStyles}>
      <HomeHero />
    </main>
  );
}
export default Home;

/////////STYLES

function homeStyles() {
  return css`
    display: grid;
    grid-auto-rows: minmax(300px, auto);
    grid-column: 1 / -1;
    grid-row: 2 / -1;
  `;
}
