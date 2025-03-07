import remToPxPlugin from "tailwindcss-rem-to-px";

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["./**/*.liquid"],
  theme: {
    extend: {
      fontFamily: {
        "best-seller": ["Bebas Neue"],
        "best-seller-price": ["Poppins"],
        "best-seller-title": ["'Source Serif 4'"],
      }
    }
  },
  safelist: [
    // Text sizes
    "tw-text-md",
    "tw-text-lg",
    "tw-text-xl",
    "tw-text-2xl",
    "tw-text-3xl",
    "md:tw-text-xl",
    "md:tw-text-2xl",
    "lg:tw-text-2xl",
    "lg:tw-text-3xl",

    //Custom sizes
    "tw-text-mobile-size",
    "md:tw-text-tablet-size",
    "lg:tw-text-desktop-size",

    // Font weights
    "tw-font-normal",
    "tw-font-semibold",
    "tw-font-bold",
  ],
  plugins: [
    remToPxPlugin({
      baseFontSize: 16,
    }),
  ],
};
