/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "my-body":
          "linear-gradient(90deg, rgba(66, 213, 244, 1) 0%, rgba(215, 243, 244, 1) 20%, rgba(215, 243, 244, 1) 80%, rgba(66, 213, 244, 1) 100%)",
        "my-header":
          "linear-gradient(0deg, rgba(199, 229, 246, 1) 0%, rgb(160, 223, 246) 25%, rgba(100, 203, 242, 1) 75%, rgb(130, 206, 250) 100%)",
        "my-topic":
          "radial-gradient(circle, rgba(63,247,251,1) 0%, rgba(70,153,252,1) 100%)",
      },
    },
  },
  plugins: [],
};
