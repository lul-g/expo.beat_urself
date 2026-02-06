import { Common, Dark, Light } from "@/utils/colors";
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { Appearance, ColorSchemeName } from "react-native";

type ThemeContextType = {
  isDark: boolean;
  toggle: () => void;
  colors: typeof Light & typeof Common;
};

const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggle: () => {},
  colors: { ...Common, ...Light },
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const colorScheme: ColorSchemeName = Appearance.getColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === "dark");

  // Listen to system color scheme changes
  useEffect(() => {
    const listener = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
      setIsDark(colorScheme === "dark");
    };

    const subscription = Appearance.addChangeListener(listener);

    return () => {
      subscription.remove();
    };
  }, []);

  const toggle = () => setIsDark(!isDark);

  const colors = { ...Common, ...(isDark ? Dark : Light) };

  return (
    <ThemeContext.Provider value={{ isDark, toggle, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
