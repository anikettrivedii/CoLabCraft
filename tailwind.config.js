// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.js'
    // Add other file types you want Tailwind to process
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // Add other Tailwind CSS plugins or configurations if needed
  ],
}
