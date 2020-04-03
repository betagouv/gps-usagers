export interface ITheme {
  /**
   * Breakpoints according to design spec, can be accessed using `width={[index[]]}` in component props
   */
  breakpoints: string[];

  /**
   * Fonts according to design spec, can be accessed using `fontFamily="key"` in component props
   */
  fonts: {
    [key: string]: string;
  };

  lineHeights: {
    [key: string]: number;
  };

  /**
   * Font-sizes according to design spec, can be accessed using `fontSize={index}` in component props
   */
  fontSizes: string[];

  /**
   * Colours according to design spec, can be accessed using `color={index}`/`color={index[]}` and `bg={index[]}`/`bg={index[]}` in component props
   */
  colors: {
    [key: string]: string;
  };

  /**
   * Border-radii according to design spec, can be accessed using `borderRadius={index}` in component props
   */
  radii: string[];

  /**
   * spacing according to design spec, can be accessed using the `m(t|r|b|l)` and `p(t|r|b|l)` props with the corresponding index
   */
  space: string[];

  textStyles?: {
    [key: string]: {};
  };

  colorStyles?: {
    [key: string]: {};
  };

  buttons: {
    [key: string]: {};
  };

  cards: {
    [key: string]: {};
  };
}

const theme: ITheme = {
  breakpoints: ["360px", "768px", "1120px", "1300px"],
  fonts: {
    sansSerif:
      '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif'
  },
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5
  },
  fontSizes: [
    ".8rem",
    "1rem",
    "1.2rem",
    "1.3rem",
    "1.4rem",
    "1.5rem",
    "1.6rem",
    "1.9rem",
    "2rem",
    "2.4rem",
    "2.8rem",
    "3.2rem",
    "3.6rem",
    "4rem",
    "4.8rem",
    "8rem",
    "9rem",
    "9.6rem"
  ],
  colors: {
    blue: "#003d7e",
    beige: "#eeebd9",
    green: "#48b95f",
    red: "#e73f57"
  },
  radii: [".3rem", ".4rem", ".5rem", ".6rem", ".8rem"],
  space: [
    "0",
    ".4rem",
    ".8rem",
    "1.6rem",
    "2.4rem",
    "3.2rem",
    "4.8rem",
    "6.4rem",
    "9.6rem",
    "12.8rem",
    "25.6rem",
    "51.2rem"
  ],
  buttons: {
    primary: {
      backgroundColor: "#18273a",
      color: "#ffffff",
      fontSize: "1.4rem",
      padding: ".8rem 1rem",
      textTransform: "uppercase",
      borderRadius: ".4rem"
    },
    green: {
      backgroundColor: "#48b95f",
      color: "#ffffff",
      fontSize: "1.4rem",
      textTransform: "uppercase",
      fontWeight: "900",
      borderRadius: ".4rem",
      "&:hover": {
        opacity: "0.9"
      }
    },
    white: {
      color: "#000",
      backgroundColor: "#ffffff",
      "&:hover": {
        backgroundColor: "rgba(24, 39, 58, 0.05)"
      }
    }
  },
  cards: {
    blue: {
      color: "#fff",
      border: "0.1rem solid rgba(24,39,58,0.15)",
      backgroundColor: "#A9DCEA"
    },
    green: {
      color: "#fff",
      border: "0.1rem solid rgba(24,39,58,0.15)",
      backgroundColor: "#48b95f"
    },
    red: {
      color: "#fff",
      border: "0.1rem solid rgba(24,39,58,0.15)",
      backgroundColor: "#e73f57"
    }
  }
};
export default theme;
