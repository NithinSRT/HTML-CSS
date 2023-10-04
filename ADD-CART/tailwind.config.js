/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        silver: {
          "100": "#c0c3c6",
          "200": "#bfbfbf",
          "300": "#b9bbbf",
        },
        gray: {
          "100": "#1b1b1b",
          "200": "rgba(0, 0, 0, 0.5)",
          "300": "rgba(255, 255, 255, 0.3)",
        },
        lightgreen: "#61c454",
        forestgreen: {
          "100": "#58a942",
          "200": "#3e9242",
        },
        goldenrod: "#f5bd4f",
        darkgoldenrod: "#d6a243",
        salmon: "#ee6a5f",
        indianred: {
          "100": "#d75951",
          "200": "#ce5347",
        },
        gainsboro: "#e4e4e4",
        dimgray: "#726c6c",
        darkslategray: {
          "100": "#1d364d",
          "200": "#0d3356",
        },
        darkslateblue: "#3a4980",
        darkgray: "#a3a3a3",
        whitesmoke: {
          "100": "#f3f3f3",
          "200": "#f5f1ee",
          "300": "#ededed",
        },
        aliceblue: "#edf0f8",
        thistle: "#ffd3f8",
        lightsteelblue: {
          "100": "#bbc1f8",
          "200": "#a3a9c2",
        },
        darkkhaki: "#bbd278",
        antiquewhite: "#ecdecc",
        linen: "#fbf3ea",
        peru: "#d48d3b",
        lavenderblush: "#fff0f0",
        lightcoral: "#d46f77",
        black: "#000",
        ghostwhite: "#eeeff8",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        mid: "17px",
        "4xs-5": "8.5px",
        "3xl": "22px",
        "27xl-3": "46.3px",
        "smi-6": "12.6px",
        "31xl-2": "50.2px",
        "20xl-2": "39.2px",
        "51xl-6": "70.6px",
        "23xl-4": "42.4px",
        "base-7": "15.7px",
        "lg-8": "18.8px",
      },
    },
    fontSize: {
      "3xl": "22px",
      "7xl-7": "26.7px",
      "6xl-1": "25.1px",
      "9xl-3": "28.3px",
      "lg-8": "18.8px",
      "32xl-5": "51.5px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
