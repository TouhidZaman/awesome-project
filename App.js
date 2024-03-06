import { useFonts } from "expo-font";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Inter_900Black } from "@expo-google-fonts/inter";
import {
	SafeAreaProvider,
	useSafeAreaInsets,
} from "react-native-safe-area-context";
import { styles } from "./App.style";

SplashScreen.preventAutoHideAsync();

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
			<Text style={styles.title}>Welcome</Text>
			<Text style={styles.subtitle}>Yee! It's working</Text>
			<StatusBar style="auto" />
		</View>
	);
}

export default function App() {
	let [fontsLoaded, fontError] = useFonts({
		Inter_900Black,
	});

	// Alternative way of Loading fonts from assets
	// const [fontsLoaded, fontError] = useFonts({
	// 	"Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
	// });

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded || fontError) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fontError]);

	useEffect(() => {
		onLayoutRootView();
	}, [onLayoutRootView]);

	if (!fontsLoaded && !fontError) {
		return null;
	}
	return (
		<SafeAreaProvider>
			<HomeScreen />
		</SafeAreaProvider>
	);
}
