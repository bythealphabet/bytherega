import React from "react";
import { jsx, css, keyframes } from "@emotion/react"; /** @jsx jsx */
import { Link } from "react-router-dom";
import HomeHero from "./HomeHero";
import HomeArticleList from "./HomeArticleList";
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
      {/* <HomeArticleList /> */}
      <HomeProjects projectsArr={projectInfoArray} />
      <section
        className=""
        css={css`
          margin: 6em 0 0;
          height: 429px;
          grid-column: 1 / -1;
          background-color: #1c2c35;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          h2 {
            text-align: center;
            padding: 1em;
          }

          p {
            max-width: 300px;
            text-align: center;
            font-size: 1.2em;
            margin-bottom: 2em;
            font-weight: 700;

            @media (min-width: 900px) {
              max-width: 450px;
            }
          }

          .btn-ripple {
            display: flex;
            align-items: center;
            justify-content: center;
            justify-self: stretch;
            background-color: var(--accent);
            transition: all 0.3s ease;

            :hover {
              background-color: var(--pink);
            }

            :hover:before {
              border: solid 2px var(--pink);
            }

            :hover:before,
            :hover:after {
              border-radius: 8px;
              width: calc(var(--innerRadius) * 2 * 2);
              height: calc(var(--innerRadius) * 2 * 0.7);
              animation: ${pulse} 2s ease-out infinite;
            }

            :hover:after {
              border: solid 2px var(--pink);
              animation-delay: 1s;
            }

            :before,
            :after {
              content: "";
              position: absolute;
            }
          }

          a {
            border: none;
            color: var(--black);
            padding: 0.8em 3em;
            font-size: 1rem;
          }
        `}
      >
        <h2 className="main-heading">What Are you working on?</h2>
        <p>
          Let’s have a conversation! <br /> I’d love to hear about what you’re
          working on and find a way to work together.
        </p>
        <Link className="btn btn-ripple" to="/contact">
          Chat
        </Link>
      </section>
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
