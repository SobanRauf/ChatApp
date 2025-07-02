import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export default function TabsLayout() {
  const { colors, dark } = useTheme();
  const focusedColor = "#793DED";
  const tabOrder = ["index", "favourites", "profile"];

  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => (
        <View
          style={[
            styles.tabBarContainer,
            {
              backgroundColor: colors.card,
              borderTopColor: colors.border,
              ...(dark ? {} : styles.lightShadow),
            },
          ]}
        >
          {tabOrder.map((routeName) => {
            const routeIndex = state.routes.findIndex(
              (route) => route.name === routeName
            );
            const route = state.routes[routeIndex];
            const isFocused = state.index === routeIndex;
            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };
            let iconName = "help-circle";
            if (route.name === "index") {
              iconName = isFocused ? "chatbubble" : "chatbubble-outline";
            } else if (route.name === "favourites") {
              iconName = isFocused ? "heart" : "heart-outline";
            } else if (route.name === "profile") {
              iconName = isFocused ? "person" : "person-outline";
            }

            return (
              <TouchableOpacity
                key={route.key}
                onPress={onPress}
                style={styles.tabButton}
              >
                <View style={styles.tabContent}>
                  <Ionicons
                    name={iconName as any}
                    size={responsiveFontSize(3)}
                    color={isFocused ? focusedColor : "#aaa"}
                  />
                  {isFocused && (
                    <View style={[styles.focusIndicator, { backgroundColor: focusedColor }]} />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: responsiveHeight(5),
    marginHorizontal: responsiveWidth(4),
    borderRadius: responsiveWidth(8),
    paddingHorizontal: responsiveWidth(8),
    paddingVertical: responsiveHeight(1.5),
    borderColor: "transparent",
    justifyContent: "space-between",
    width: responsiveWidth(92),
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabContent: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  focusIndicator: {
    width: responsiveWidth(1.5),
    height: responsiveWidth(1.5),
    borderRadius: responsiveWidth(0.75),
    marginTop: responsiveHeight(0.5),
    position: "absolute",
    bottom: -responsiveHeight(1),
  },
  lightShadow: {
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
      },
      android: {
        elevation: 12,
      },
    }),
  },
});