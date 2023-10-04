/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        midnightblue: {
          "100": "#121139",
          "200": "rgba(18, 17, 57, 0.2)",
        },
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "881xl": "900px",
        "11xl": "30px",
      },
    },
    fontSize: {
      "3xl": "22px",
      "80xl": "99px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
