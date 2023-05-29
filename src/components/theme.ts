import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  ...config,
  fonts: {
    body: "Raleway, sans-serif",
    heading: "Raleway, sans-serif",
    // Add more font styles as needed
  },
});

export default theme;
