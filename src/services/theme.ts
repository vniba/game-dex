import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  fonts: {
    body: "monospace",
    heading: "Raleway, sans-serif",
    // Add more font styles as needed
  },
});

export default theme;
