"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme = {
    breakpoints: ["360px", "768px", "1120px", "1300px"],
    fonts: {
        sansSerif: '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif'
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
        red: "#e73f57",
        darkGray: "#474747"
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
        blue: {
            backgroundColor: "#003d7e",
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
            backgroundColor: "#003d7e"
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
        },
        gray: {
            color: "#7e7e7e",
            backgroundColor: "#eee"
        }
    }
};
exports.default = theme;
//# sourceMappingURL=index.js.map