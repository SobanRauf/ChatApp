import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";

export const CustomDarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    primary: "rgb(10, 132, 255)",
    background: "rgb(20, 20, 20)",
    card: "rgb(30, 30, 30)",
    text: "rgb(229, 229, 231)",
    border: "rgb(39, 39, 41)",
    notification: "rgb(255, 69, 58)",
    sentBubble: "rgb(0, 122, 255)",
    receivedBubble: "rgb(44, 44, 46)",
    searchBg: "rgb(20, 20, 20)",
    otherMsgBg: "#2C2C2E", 
    myMsgBg: "#3E3A6D", 
    inputcard: "rgb(44, 44, 46)",
  },
};

export const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    primary: "rgb(0, 122, 255)",
    background: "#FFFFFF",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(200, 199, 204)",
    notification: "rgb(255, 59, 48)",
    sentBubble: "rgb(0, 122, 255)",
    receivedBubble: "rgb(229, 229, 234)",
    searchBg: "#EBEFF0",
    otherMsgBg: "#ECF0F1",
    myMsgBg: "#ECE9FE",
    inputcard: "#F2F2F2",
    messageText: "#1E1E1E",
  },
};
