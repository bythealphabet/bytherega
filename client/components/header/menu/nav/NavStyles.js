import { jsx, css } from "@emotion/react"; /** @jsx jsx */

export function navStyle() {
  return css`
    z-index: 11;
    display: flex;

    @media (min-width: 900px) {
      background: transparent;
    }

    .nav-auth {
      margin-left: 1em;
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @media (min-width: 900px) {
        width: 100%;
        flex-direction: row;
        align-items: center;
      }

      li {
        @media (min-width: 900px) {
          margin: 0 0.4em;
          padding: 0 0.4em;
          border: none;

          :hover {
            background: transparent;
          }

          :last-of-type {
            padding-right: 0;
            margin-right: 0;
          }
        }

        .nav-btn {
          cursor: pointer;
          display: inline-block;
          padding: 0.5em 1em;
          font-weight: 700;
          text-align: center;
          background: var(--blue);
          color: var(--darkBlue);

          border-radius: 3rem;
          width: 100%;
          margin: 0.5em 0;
          transition: all 0.2s ease-in-out;

          @media (min-width: 900px) {
            font-size: 0.6rem;
            border: solid 0.2em var(--brightGreen);
            color: var(--accent);
            background: transparent;
          }

          :hover,
          :focus {
            color: var(--forestGreen);
            background: var(--darkGreen);
            /* border: solid 0.2em var(--pink); */
          }
        }

        a {
          text-decoration: none;
          display: flex;
          justify-content: space-between;
          font-size: var(--body);
          text-transform: capitalize;
          color: var(--darkGreen);
          transition: color 0.2s ease-in-out;

          :hover {
            color: var(--brightGreen);
          }

          @media (min-width: 900px) {
            font-size: var(--body);
            color: var(--darkGreen);
            text-align: center;
            font-weight: bold;
          }
        }
      }
    }
  `;
}
