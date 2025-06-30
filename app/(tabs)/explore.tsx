// import { useColorScheme } from '@/hooks/useColorScheme';
// import { getStyles } from '@/styles';
// import { useTheme } from '@react-navigation/native';
// import React from 'react';
// import { SafeAreaView, Switch, Text, View } from 'react-native';
// import { responsiveHeight } from 'react-native-responsive-dimensions';

// export default function ProfileScreen() {
//   const { colors } = useTheme();
//   const { colorScheme, setColorScheme } = useColorScheme();
//   const styles = getStyles(colors);

//   const toggleTheme = () => {
//     setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
//   };

//   return (
//     <SafeAreaView style={[styles.screen, { justifyContent: 'center', alignItems: 'center' }]}>
//       <Text style={styles.headerTitle}>Profile</Text>
//       <View style={{ marginTop: responsiveHeight(3), flexDirection: 'row', alignItems: 'center' }}>
//         <Text style={styles.text}>Dark Mode</Text>
//         <Switch
//           style={{ marginLeft: 10 }}
//           trackColor={{ false: "#767577", true: colors.primary }}
//           thumbColor={colorScheme === 'dark' ? "#f4f3f4" : "#f4f3f4"}
//           value={colorScheme === 'dark'}
//           onValueChange={toggleTheme}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }
import { useColorScheme } from '@/hooks/useColorScheme';
import { getStyles } from '@/styles';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Switch, Text, View } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';

export default function ProfileScreen() {
  const { colors } = useTheme();

  const { colorScheme, setColorScheme } = useColorScheme();

  const styles = getStyles(colors);

  const toggleTheme = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <SafeAreaView style={[styles.screen, { justifyContent: 'center', alignItems: 'center' }]}>
      <Text style={styles.headerTitle}>Profile</Text>
      <View style={{ marginTop: responsiveHeight(3), flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch
          style={{ marginLeft: 10 }}
          trackColor={{ false: "#767577", true: colors.primary }}
          thumbColor={colorScheme === 'dark' ? "#f4f3f4" : "#f4f3f4"}
          value={colorScheme === 'dark'}
          onValueChange={toggleTheme}
        />
      </View>
    </SafeAreaView>
  );
}