import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  googleFonts: [
    {
      name: "Tomorrow",
      styles: [],
    },
  ],
  headerFontFamily: [
    "Tomorrow",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Tomorrow", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
  bodyColor: "white"
});

export default typography;
