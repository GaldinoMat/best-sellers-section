import remToPxPlugin from "tailwindcss-rem-to-px";

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["./**/*.liquid"],
  theme: {
    screens: {
      'xxs': '375px',
      'xs': '556px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
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
    "lg:tw-text-sm",
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
    "md:tw-font-normal",
    "md:tw-font-semibold",
    "md:tw-font-bold",
    "lg:tw-font-normal",
    "lg:tw-font-semibold",
    "lg:tw-font-bold",
  ],
  plugins: [
    remToPxPlugin({
      baseFontSize: 16,
    }),
  ],
};
