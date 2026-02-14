import { createStitches } from "@stitches/react";

// permite ter um tema global
export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme
} = createStitches({
  theme: {
    colors: {
      rocketseat: '#8257e6'
    }
  }
});
