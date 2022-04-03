import { jsx, css } from "@emotion/react"; /** @jsx jsx */

export const themes = [
  {
    colors: {
      brightGreen: "#008065",
      forestGreen: "#025847",
      darkGreen: "#004438",
      sand: "#EAE0CE",
      offWhite: "F9F6F0",
      wood: "#CB998D",
      white: "#fffff",
      black: "#00000",
    },
    background: css`
      background-image: linear-gradient(
        to bottom,
        #eae0ce 0%,
        rgba(206, 135, 29, 0.3) 100%
      );
    `,
    typography: {
      typefaces: {
        Tangarine: "'Tangerine', cursive",
        Lato: "'Lato', sans-serif",
      },
      fontSize: {
        body: "1rem",
        title: "8em",
        subtitle: "6em",
        h4: "2.4rem",
        h5: "2.4rem",
        helperText: "1.2rem",
        Copyright: ".9rem",
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
  {
    colors: {
      brightGreen: "#008065",
      forestGreen: "#025847",
      darkGreen: "#004438",
      sand: "#EAE0CE",
      offWhite: "F9F6F0",
      wood: "#CB998D",
      white: "#fffff",
      black: "#00000",
    },
    background: css`
      background-image: linear-gradient(to bottom, #eae0ce 0%, #008065 100%);
    `,
    typography: {
      typefaces: {
        Tangarine: "'Tangerine', cursive",
        Lato: "'Lato', sans-serif",
      },
      fontSize: {
        body: "1.6rem",
        title: "8em",
        subtitle: "6em",
        h4: "2.4rem",
        h5: "2.4rem",
        helperText: "1.2rem",
        Copyright: ".9rem",
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
];
