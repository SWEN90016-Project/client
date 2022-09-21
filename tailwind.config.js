/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms"), require('tw-elements/dist/plugin')],
};
