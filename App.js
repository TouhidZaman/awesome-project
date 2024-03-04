import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import {
	SafeAreaProvider,
	useSafeAreaInsets,
} from "react-native-safe-area-context";
import { styles } from "./App.style";

function HomeScreen() {
	const insets = useSafeAreaInsets();
	return (
		<View
			style={{
				...styles.container,
				paddingTop: insets.top,
				paddingBottom: insets.bottom,
			}}
		>
			<Text style={styles.subtitle}>Yee! It's working</Text>
			<StatusBar style="auto" />
		</View>
	);
}

export default function App() {
	return (
		<SafeAreaProvider>
			<HomeScreen />
		</SafeAreaProvider>
	);
}
