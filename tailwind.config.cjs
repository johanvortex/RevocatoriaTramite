/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  important: "#root",
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8c8c8c",
          secondary: "#3c3c3c",
          accent: "#515151",
          neutral: "#666666",
          content: "#f7f7f7",
          "base-100": "#ffff",
          info: "#40b4ce",
          success: "#43d080",
          warning: "#b36614",
          error: "#ef3e73",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        'HelveticaNowTextBlack': ['HelveticaNowTextBlack','sans-serif'],
        'HelveticaNowTextBold': ['HelveticaNowTextBold', 'sans-serif'],
        'HelveticaNowTextExtBdIta': ['HelveticaNowTextExtBdIta', 'sans-serif'],
        'HelveticaNowTextLight': ['HelveticaNowTextLight', 'sans-serif'],
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require("daisyui")],
};
