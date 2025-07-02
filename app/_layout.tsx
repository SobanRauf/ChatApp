import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { ThemeProviderContext, useAppTheme } from "@/context/themeContext";
import { CustomDarkTheme, CustomDefaultTheme } from "@/hooks/Styles";
import { persistor, store } from "@/store/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function MainApp() {
  const { colorScheme } = useAppTheme();

  return (
    <ThemeProvider
      value={colorScheme === "dark" ? CustomDarkTheme : CustomDefaultTheme}
    >
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </ThemeProvider>
  );
}

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProviderContext>
          <MainApp />
        </ThemeProviderContext>
      </PersistGate>
    </Provider>
  );
}
