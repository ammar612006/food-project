export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // Custom gradients
        'sunrise': 'linear-gradient(to right, #ffedd5, #fff7ed)',
        'soft-orange': 'linear-gradient(to right, #fef3c7, #fde68a)',
      },
    },
  },
  plugins: [],
};
