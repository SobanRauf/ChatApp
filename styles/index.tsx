import { Platform, StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

type ThemeColors = {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
  sentBubble?: string;
  receivedBubble?: string;
  searchBg?: string;
  otherMsgBg?: string;
  myMsgBg?: string;
  messageText?: string;
  inputcard?: string;
};
export const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: Platform.OS === "ios" ? 0 : responsiveHeight(3),
    },
    header: {
      padding: responsiveWidth(4),
      marginTop:
        Platform.OS === "ios" ? responsiveHeight(0) : responsiveHeight(4),
    },
    headerTitle: {
      fontSize: responsiveFontSize(2.5),
      fontWeight: "bold",
      color: colors.text,
      textAlign: "center",
    },
    text: {
      fontSize: responsiveFontSize(2),
      color: colors.text,
    },
    separator: {
      height: 1,
      backgroundColor: colors.border,
      marginLeft: responsiveWidth(20),
    },
    chatItemContainer: {
      paddingHorizontal: responsiveWidth(4),
      paddingVertical: responsiveHeight(1.5),
      backgroundColor: colors.card,
    },
    chatItemContent: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    avatar: {
      width: responsiveWidth(14),
      height: responsiveWidth(14),
      borderRadius: responsiveWidth(7),
      justifyContent: "center",
      alignItems: "center",
      marginRight: responsiveWidth(4),
    },
    image: {
      height: responsiveHeight(7),
      width: responsiveWidth(15),
    },
    avatarText: {
      color: "#FFF",
      fontSize: responsiveFontSize(3),
      fontWeight: "bold",
    },
    chatItemTextContainer: {
      justifyContent: "center",
      width: responsiveWidth(50),
    },
    chatItemName: {
      fontSize: responsiveFontSize(2.2),
      fontWeight: "bold",
      color: colors.text,
    },
    chatItemMessage: {
      fontSize: responsiveFontSize(1.8),
      color: "gray",
      marginTop: 4,
    },
    chatItemMeta: {
      alignItems: "flex-end",
      justifyContent: "center",
    },
    chatItemTime: {
      fontSize: responsiveFontSize(1.6),
      color: "gray",
    },
    messagesList: {
      flex: 1,
      paddingHorizontal: responsiveWidth(2),
    },
    messageBubble: {
      paddingVertical: responsiveHeight(1.5),
      paddingHorizontal: responsiveWidth(4),
      borderRadius: 20,
      marginVertical: responsiveHeight(0.5),
      maxWidth: "80%",
    },
    myMessage: {
      backgroundColor: colors.myMsgBg,
      alignSelf: "flex-end",
      borderBottomRightRadius: 4,
    },
    otherMessage: {
      backgroundColor: colors.otherMsgBg,
      alignSelf: "flex-start",
      borderBottomLeftRadius: 4,
    },
    messageText: {
      fontSize: responsiveFontSize(2),
      color: colors.text,
    },
    messageTime: {
      fontSize: responsiveFontSize(1.4),
      alignSelf: "flex-end",
      marginTop: 5,
      color: "gray",
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      padding: responsiveWidth(2),
      backgroundColor: colors.card,
    },
    textInput: {
      flex: 1,
      height: responsiveHeight(7),
      borderRadius: responsiveWidth(10),
      paddingHorizontal: responsiveWidth(4),
      fontSize: responsiveFontSize(2),
      backgroundColor: colors.inputcard,
      color: colors.text,
    },
    sendButton: {
      marginLeft: responsiveWidth(2),
      backgroundColor: "#793DED",
      borderRadius: 25,
      width: 50,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
    },
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.searchBg,
      borderRadius: responsiveWidth(4),
      marginHorizontal: responsiveWidth(5),
      marginBottom: responsiveHeight(2),
      paddingHorizontal: responsiveWidth(4),
      height: responsiveHeight(5.5),
      marginTop: responsiveHeight(2),
      borderColor: "#EBEFF0",
      borderWidth: 1,
    },
    searchInput: {
      flex: 1,
      marginLeft: responsiveWidth(2),
      fontSize: responsiveFontSize(1.8),
      color: colors.text,
    },

    header2: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: responsiveWidth(4),
      paddingVertical: responsiveHeight(2),
      borderBottomWidth: 1,
      borderBottomColor: "#E0E0E0",
    },
    iconButton: {
      paddingHorizontal: responsiveWidth(2),
    },
    avatar2: {
      width: responsiveWidth(9),
      height: responsiveWidth(9),
      borderRadius: responsiveWidth(4.5),
      marginHorizontal: responsiveWidth(2),
    },
    name: {
      flex: 1,
      fontSize: responsiveFontSize(2.2),
      fontWeight: "600",
    },
    profileContainer: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },

    profileAvatar: {
      width: responsiveWidth(30),
      height: responsiveWidth(30),
      borderRadius: responsiveWidth(15),
      borderWidth: 2,
      borderColor: "#793DED",
      marginBottom: responsiveHeight(3),
      marginTop:
        Platform.OS === "ios" ? responsiveHeight(0) : responsiveHeight(4),
    },

    profileName: {
      fontSize: responsiveFontSize(3),
      fontWeight: "bold",
      color: "#793DED",
      marginBottom: responsiveHeight(4),
    },

    switchContainer: {
      backgroundColor: colors.card,
      padding: responsiveWidth(5),
      borderRadius: 15,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 5,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: responsiveWidth(80),
    },
    switchLabel: {
      fontSize: responsiveFontSize(2),
      color: colors.text,
      marginRight: responsiveWidth(3),
    },
    menuOption: {
      backgroundColor: colors.card,
      padding: responsiveWidth(4),
      borderRadius: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: responsiveWidth(80),
      marginTop: responsiveHeight(2),
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    },
    menuLeft: {
      flexDirection: "row",
      alignItems: "center",
    },
    menuLabel: {
      fontSize: responsiveFontSize(2),
      color: colors.text,
      marginLeft: responsiveWidth(3),
    },
    logoutButton: {
      backgroundColor: colors.myMsgBg,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: responsiveWidth(80),
      padding: responsiveWidth(4),
      borderRadius: 20,
      marginTop: responsiveHeight(4),
    },
    logoutLabel: {
      fontSize: responsiveFontSize(2),
      color: colors.text,
      marginLeft: responsiveWidth(2),
    },
  });
