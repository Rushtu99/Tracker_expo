/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./<custom-directory>/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: "#fab005",
                secondary: "#03DAC5",
                bg: "#08080d",
                good: "#00ff00",
                bad: "#ff0000",
                bgmid: "#0a0a0a",
                bgsec: "#101010",
                tertiary: "#FFAB91",
                text: "#c0e0e0",
                textlight: "#b0b0b0",
                grey: "#262626",
                border: "#2E2E2E",
            },
        },
    },
    plugins: [],
};
