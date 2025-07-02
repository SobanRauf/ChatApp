import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Appearance } from "react-native";

const COLOR_SCHEME_KEY = "userColorScheme";

interface ThemeContextProps {
  colorScheme: "light" | "dark";
  toggleColorScheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProviderContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const deviceScheme = Appearance.getColorScheme() ?? "light";
  const [colorScheme, setColorScheme] = useState<"light" | "dark">(
    deviceScheme
  );

  useEffect(() => {
    const loadColorScheme = async () => {
      const storedScheme = await AsyncStorage.getItem(COLOR_SCHEME_KEY);
      if (storedScheme === "light" || storedScheme === "dark") {
        setColorScheme(storedScheme);
      }
    };
    loadColorScheme();
  }, []);

  const toggleColorScheme = async () => {
    const newScheme = colorScheme === "dark" ? "light" : "dark";
    await AsyncStorage.setItem(COLOR_SCHEME_KEY, newScheme);
    setColorScheme(newScheme);
  };

  return (
    <ThemeContext.Provider value={{ colorScheme, toggleColorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useAppTheme must be used within ThemeProviderContext");
  return context;
};
