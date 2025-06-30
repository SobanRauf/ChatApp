import AsyncStorage from '@react-native-async-storage/async-storage'; // You'll need to install this: npx expo install @react-native-async-storage/async-storage
import { useEffect, useState } from 'react';
import { useColorScheme as useDeviceColorScheme } from 'react-native';

const COLOR_SCHEME_KEY = 'userColorScheme';

export function useColorScheme() {
  const deviceScheme = useDeviceColorScheme();
  const [colorScheme, setColorSchemeState] = useState(deviceScheme);

  useEffect(() => {
    const loadColorScheme = async () => {
      try {
        const persistedScheme = await AsyncStorage.getItem(COLOR_SCHEME_KEY);
        if (persistedScheme) {
          setColorSchemeState(persistedScheme);
        } else {
          setColorSchemeState(deviceScheme);
        }
      } catch (error) {
        console.error('Failed to load color scheme from AsyncStorage', error);
        setColorSchemeState(deviceScheme); // Fallback to device scheme
      }
    };

    loadColorScheme();
  }, [deviceScheme]);

  const setColorScheme = async (scheme) => {
    try {
      await AsyncStorage.setItem(COLOR_SCHEME_KEY, scheme);
      setColorSchemeState(scheme);
    } catch (error) {
      console.error('Failed to save color scheme to AsyncStorage', error);
    }
  };

  return { colorScheme, setColorScheme };
}