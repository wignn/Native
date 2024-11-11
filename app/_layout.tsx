import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <StatusBar barStyle="light-content" />
      <Stack.Screen name="index" 
      options={{ headerTitle: "Stocks", headerBackTitle: "Stacks" }}
      />
      <Stack.Screen name="stock/{symbol}"/>
    </GestureHandlerRootView>
  );
}
