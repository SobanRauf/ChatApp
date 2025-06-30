import { Platform, StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export const getStyles = (colors) =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      padding: responsiveWidth(4),
      // borderBottomWidth: 1,
      // borderBottomColor: colors.border,
      backgroundColor: colors.card,
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
      // borderWidth: 1,
      // borderColor: colors.border,
    },
    messageText: {
      fontSize: responsiveFontSize(2),
    },
    messageTime: {
      fontSize: responsiveFontSize(1.4),
      alignSelf: "flex-end",
      marginTop: 5,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      padding: responsiveWidth(2),
      // borderTopWidth: 1,
      // borderTopColor: colors.border,
      backgroundColor: colors.card,
      marginBottom: Platform.OS === "ios" ? 0 : responsiveHeight(4),
    },
    textInput: {
      flex: 1,
      height: responsiveHeight(7),
      backgroundColor: "#F2F2F2",
      borderRadius: responsiveWidth(10),
      paddingHorizontal: responsiveWidth(4),
      fontSize: responsiveFontSize(2),
      color: colors.text,
      // borderWidth: 1,
      // borderColor: colors.border,
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
      backgroundColor: colors.searchBg, // light grey for light mode, dark border for dark mode
      borderRadius: responsiveWidth(4),
      marginHorizontal: responsiveWidth(5),
      marginBottom: responsiveHeight(2),
      paddingHorizontal: responsiveWidth(4),
      height: responsiveHeight(5.5),
      marginTop: responsiveHeight(2),
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
  });
