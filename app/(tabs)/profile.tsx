import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";

import { useAppTheme } from "@/context/themeContext";
import { getStyles } from "@/styles";

export default function ProfileScreen() {
  const { colors } = useTheme();
  const { colorScheme, toggleColorScheme } = useAppTheme();
  const styles = getStyles(colors);

  const menuOptions = [
    { icon: "person", label: "Edit Profile", onPress: () => {} },
    { icon: "lock-closed", label: "Change Password", onPress: () => {} },
    { icon: "notifications", label: "Notifications", onPress: () => {} },
    { icon: "help-circle", label: "Help & Support", onPress: () => {} },
  ];

  return (
    <SafeAreaView style={[styles.screen, { flex: 1 }]}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Image
          source={{
            uri: "https://ui-avatars.com/api/?name=Soban+R&background=3E3A6D&color=fff&size=150",
          }}
          style={styles.profileAvatar}
        />
        <Text style={styles.profileName}>Soban R</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={toggleColorScheme}
          style={styles.switchContainer}
        >
          <Text style={styles.switchLabel}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#793DED" }}
            thumbColor={colorScheme === "dark" ? "#f4f3f4" : "#f4f3f4"}
            value={colorScheme === "dark"}
            onValueChange={toggleColorScheme}
          />
        </TouchableOpacity>
        {menuOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuOption}
            activeOpacity={0.7}
            onPress={option.onPress}
          >
            <View style={styles.menuLeft}>
              <Ionicons
                name={option.icon as any}
                size={responsiveFontSize(2.5)}
                color="#793DED"
              />
              <Text style={styles.menuLabel}>{option.label}</Text>
            </View>
            <Ionicons
              name="chevron-forward"
              size={responsiveFontSize(2.5)}
              color="#aaa"
            />
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.logoutButton} activeOpacity={0.7}>
          <Ionicons
            name="log-out-outline"
            size={responsiveFontSize(2.5)}
            color={colorScheme === "light" ? "black" : "white"}
          />
          <Text style={styles.logoutLabel}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
