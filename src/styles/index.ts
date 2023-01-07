import { createStitches } from "@stitches/react";

const config = createStitches({
  theme: {
    colors: {
      rocketSeat: "#8257e6",
    },
  },
});

export const { styled, css, globalCss, keyframes, getCssText, theme } = config;
