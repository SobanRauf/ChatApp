// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { Appearance } from 'react-native';

// const lightTheme = {
//   background: '#FFFFFF',
//   text: '#000000',
//   primary: '#6200EE',
//   card: '#F5F5F5',
//   border: '#E0E0E0',
//   sentBubble: '#E1F5FE',
//   receivedBubble: '#FFFFFF',
//   tabBar: '#FFFFFF',
//   activeTab: '#6200EE',
//   inactiveTab: '#8e8e93',
// };

// const darkTheme = {
//   background: '#121212',
//   text: '#FFFFFF',
//   primary: '#BB86FC',
//   card: '#1E1E1E',
//   border: '#272727',
//   sentBubble: '#3700B3',
//   receivedBubble: '#333333',
//   tabBar: '#1E1E1E',
//   activeTab: '#BB86FC',
//   inactiveTab: '#8e8e93',
// };

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(Appearance.getColorScheme() === 'dark');

//   useEffect(() => {
//     const subscription = Appearance.addChangeListener(({ colorScheme }) => {
//       setIsDarkMode(colorScheme === 'dark');
//     });
//     return () => subscription.remove();
//   }, []);
  
//   const toggleTheme = () => setIsDarkMode(prev => !prev);
//   const theme = isDarkMode ? darkTheme : lightTheme;

//   return (
//     <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);