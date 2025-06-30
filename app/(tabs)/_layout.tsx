// import { Ionicons } from '@expo/vector-icons';
// import { useTheme } from '@react-navigation/native';
// import { Tabs } from 'expo-router';
// import React from 'react';
// import { responsiveHeight } from 'react-native-responsive-dimensions';

// export default function TabsLayout() {
//   const { colors } = useTheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: colors.primary,
//         tabBarInactiveTintColor: 'gray',
//         headerShown: false,
//         tabBarStyle: {
//           backgroundColor: colors.card,
//           borderTopColor: colors.border,
//           height: responsiveHeight(8),
//           paddingBottom: responsiveHeight(1),
//         },
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Chats',
//           tabBarIcon: ({ color, focused }) => (
//             <Ionicons name={focused ? 'chatbubbles' : 'chatbubbles-outline'} size={24} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: 'Profile',
//           tabBarIcon: ({ color, focused }) => (
//             <Ionicons name={focused ? 'person' : 'person-outline'} size={24} color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }
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
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;

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

            // ✅ Icon mapping
            let iconName = "";
            if (route.name === "index") {
              iconName = isFocused ? "chatbubble" : "chatbubble-outline";
            } 
            else 
            if (route.name === "favorites") {
              iconName = isFocused ? "heart" : "heart-outline";
            } 
            else if (route.name === "explore") {
              iconName = isFocused ? "person" : "person-outline";
            }

            return (
              <TouchableOpacity
                key={route.key}
                onPress={onPress}
                style={styles.tabButton}
              >
                <Ionicons
                  name={iconName as any}
                  size={responsiveFontSize(3)}
                  color={isFocused ? focusedColor : "#aaa"}
                />
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
