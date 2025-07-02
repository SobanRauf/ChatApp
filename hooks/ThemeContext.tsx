// ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme as useDeviceColorScheme } from "react-native";

const COLOR_SCHEME_KEY = "userColorScheme";

const ThemeContext = createContext({
  colorScheme: "light",
  toggleTheme: () => {},
});

export function ThemeProviderCustom({ children }:any) {
  const deviceScheme = useDeviceColorScheme();
  const [colorScheme, setColorScheme] = useState(deviceScheme);

  useEffect(() => {
    const loadColorScheme = async () => {
      const storedScheme = await AsyncStorage.getItem(COLOR_SCHEME_KEY);
      if (storedScheme) {
        setColorScheme(storedScheme);
      }
    };
    loadColorScheme();
  }, []);

  const toggleTheme = async () => {
    const newScheme = colorScheme === "dark" ? "light" : "dark";
    await AsyncStorage.setItem(COLOR_SCHEME_KEY, newScheme);
    setColorScheme(newScheme);
  };

  return (
    <ThemeContext.Provider value={{ colorScheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
