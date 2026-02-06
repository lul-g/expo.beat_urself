import { ThemeProvider, useTheme } from "@/context/ThemeProvider";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  const { isDark, colors } = useTheme();

  return (
    <ThemeProvider>
      <StatusBar
        translucent
        backgroundColor={"transparent"}
        barStyle={isDark ? "light-content" : "dark-content"}
        animated={true}
      />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
