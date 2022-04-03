import React from "react";
import { jsx, css, Global, useTheme } from "@emotion/react"; /** @jsx jsx */
import { stylesReset } from "./stylesReset";

export function GlobalStyles() {
  const { colors, background, typography } = useTheme();

  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Lato&family=Tangerine:wght@700&display=swap");

        ${stylesReset};

        :root {
          --headerHeight: 8, 5rem;
          --footerHeight: 100px;
          --innerRadius: 2em;
          --brightGreen: ${colors.brightGreen};
          --forestGreen: ${colors.forestGreen};
          --darkGreen: ${colors.darkGreen};
          --sand: ${colors.sand};
          --offWhite: ${colors.offWhite};
          --wood: ${colors.wood};
          --white: ${colors.white};
          --black: ${colors.black};
          --tangarine: ${typography.typefaces.Tangarine};
          --lato: ${typography.typefaces.Lato};
          --body: ${typography.fontSize.body};
          --title: ${typography.fontSize.title};
          --subtitle: ${typography.fontSize.subtitle};
          --h4: ${typography.fontSize.h4};
          --h5: ${typography.fontSize.h5};
          --helperText: ${typography.fontSize.helperText};
        }

        body,
        html {
          margin: 0;
          padding: 0;
          font-family: var(--lato);
          )font-size: var(--body);
          color: var(--white);
          line-height: 1.6;
          ${background};
          transition: all 0.3s linear;

          @media (min-width: 900px) {
            font-size: 18px;
          }
        }

        .no-scroll {
          position: fixed;
          overflow-y: hidden;
        }

        .no-scrollbar {
          scrollbar-width: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .truncate {
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
        }

        ////////////BUTTONS
        .btn,
        .base-btn {
          display: inline-block;
          padding: 0.5em 1.2em;
          font-size: 0.8rem;
          font-weight: bold;
          border: solid 0.2em var(--dark);
          background: var(--white);
          cursor: pointer;
          border-radius: 8px;

          :hover,
          :focus {
            color: var(--accent);
            background: var(--dark);
          }
        }

        /////GRID LAYOUT
        .base-grid {
          display: grid;
          grid-template-columns:
            minmax(1em, 1fr) repeat(6, minmax(30px, 125px))
            minmax(1em, 1fr);

          @media (min-width: 900px) {
            grid-template-columns:
              minmax(10em, 1fr) repeat(12, minmax(50px, 125px))
              minmax(10em, 1fr);
          }
        }
      `}
    />
  );
}
