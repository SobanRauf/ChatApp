// src/constants/themes.js
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";

// Extend the default colors for Dark Theme
export const CustomDarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    primary: "rgb(10, 132, 255)", // Example primary color for dark theme
    background: "rgb(20, 20, 20)", // A darker background for consistency
    card: "rgb(30, 30, 30)", // Darker card background
    text: "rgb(229, 229, 231)", // Lighter text for dark theme
    border: "rgb(39, 39, 41)", // Darker border
    notification: "rgb(255, 69, 58)",
    sentBubble: "rgb(0, 122, 255)", // Specific color for your sent messages
    receivedBubble: "rgb(44, 44, 46)", // Specific color for your received messages
    searchBg: "rgb(20, 20, 20)",
    otherMsgBg:"#ECF0F1"
  },
};

// Extend the default colors for Light Theme
export const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    primary: "rgb(0, 122, 255)", // Example primary color for light theme
    background: "#FFFFFF", // Standard light background
    card: "rgb(255, 255, 255)", // White card background
    text: "rgb(28, 28, 30)", // Dark text for light theme
    border: "rgb(200, 199, 204)", // Lighter border
    notification: "rgb(255, 59, 48)",
    sentBubble: "rgb(0, 122, 255)", // Specific color for your sent messages
    receivedBubble: "rgb(229, 229, 234)",
    searchBg: "#EBEFF0", // Specific color for your received messages
    otherMsgBg:"#ECF0F1",
    myMsgBg:"#ECE9FE",
    messageText:"#1E1E1E"
  },
};
