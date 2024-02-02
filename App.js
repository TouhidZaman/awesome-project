import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './App.style';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>This is my First React Native App...</Text>
      <StatusBar style="auto" />
    </View>
  );
}
