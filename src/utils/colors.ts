// src/constants/colors.ts

export const Common = {
  white: "#FFFFFF",
  black: "#000000",
  accent: "#FFC729",
  success: "#28A745",
  warning: "#FFC729",
  error: "#DC3545",
  info: "#17A2B8",

  // Background variants (clean)
  whiteBg: "rgba(255, 255, 255, 0.12)",
  blackBg: "rgba(0, 0, 0, 0.12)",
  accentBg: "rgba(255, 199, 41, 0.12)",
  successBg: "rgba(40, 167, 69, 0.12)",
  warningBg: "rgba(255, 199, 41, 0.12)",
  errorBg: "rgba(220, 53, 69, 0.12)",
  infoBg: "rgba(23, 162, 184, 0.12)",
};

// Light theme
export const Light = {
  bgPrimary: "#F7F7F7",
  bgSecondary: "#EDEDED",
  surface: "#FFFFFF",
  textPrimary: "#1A1A1A",
  textSecondary: "#4A4A4A",
  textTeritiary: "#999999",
  textOnAccent: Common.black,
  border: "#D0D0D0",
};

// Dark theme
export const Dark = {
  bgPrimary: Common.black, // Pure black
  bgSecondary: "#121212", // Default Android dark background
  surface: "#1E1E1E", // Cards / panels
  textPrimary: Common.white,
  textSecondary: "#B0B0B0",
  textTeritiary: "#AAAAAA",
  textOnAccent: Common.black,
  border: "#2C2C2C",
};
