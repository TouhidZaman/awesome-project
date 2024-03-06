import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
		alignItems: "center",
	},
	title: {
		color: "white",
		fontSize: 28,
		marginVertical: 16,
		fontFamily: Platform.select({
			ios: "Inter-Black",
			android: "Inter_900Black",
		}),
	},
	subtitle: {
		color: "white",
		fontSize: 20,
	},
});
