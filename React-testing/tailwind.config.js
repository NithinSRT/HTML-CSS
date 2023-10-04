/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
      lg: "18px",
      "3xl": "22px",
      "71xl": "90px",
      "80xl": "99px",
      xs: "12px",
      smi: "13px",
      "2xs": "11px",
      sm: "14px",
      "9xl": "28px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
