export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

/* 
import React from "react";
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/storybook-addon";

Global variables should be added here
export const decorators = [
  (Story) => {
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Story />
    </ThemeProvider>;
  },
];
*/
