import { useTheme } from "@/context/ThemeProvider";
import IonIcons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import { Platform, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TabLayout = () => {
  const { isDark, colors } = useTheme();

  return (
    <>
      <StatusBar
        translucent
        backgroundColor={"transparent"}
        barStyle={isDark ? "light-content" : "dark-content"}
        animated={true}
      />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.surface,
        }}
        edges={["top"]}
      >
        <Tabs
          initialRouteName="index"
          screenOptions={{
            tabBarActiveTintColor: colors.surface,
            tabBarInactiveTintColor: colors.surface,
            tabBarStyle: {
              height: 90,
              paddingTop: Platform.OS === "android" ? 10 : 0,
              paddingHorizontal: 5,
              backgroundColor: colors.surface,
              borderTopColor: colors.border,
              borderTopWidth: Platform.OS === "android" ? 0.2 : 1,
            },
            tabBarLabelStyle: {
              marginTop: 5,
              fontSize: 12,
              fontWeight: "bold",
              color: colors.textPrimary,
            },
            tabBarIconStyle: {
              marginTop: 5,
            },
            headerStyle: {
              backgroundColor: colors.surface,
            },
            headerTitleStyle: {
              color: colors.textPrimary,
            },
            headerShown: false,
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Home",
              tabBarIcon: ({ size, focused, color }) => (
                <IonIcons
                  name={focused ? "home" : "home-outline"}
                  size={size}
                  color={colors.textPrimary}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="history"
            options={{
              title: "History",
              tabBarIcon: ({ size, focused, color }) => (
                <MaterialCommunityIcons
                  name={focused ? "clock-time-four" : "clock-time-four-outline"}
                  size={size + 2}
                  color={colors.textPrimary}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="achievments"
            options={{
              title: "Achievments",
              tabBarIcon: ({ size, focused, color }) => (
                <IonIcons
                  name={focused ? "trophy" : "trophy-outline"}
                  size={size}
                  color={colors.textPrimary}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="settings"
            options={{
              title: "Settings",
              tabBarIcon: ({ size, focused, color }) =>
                focused ? (
                  <MaterialCommunityIcons
                    name="database-search"
                    size={size}
                    color={colors.textPrimary}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="database-search-outline"
                    size={size}
                    color={colors.textPrimary}
                  />
                ),
            }}
          />
        </Tabs>
      </SafeAreaView>
    </>
  );
};

export default TabLayout;
