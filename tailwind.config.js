module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        greatVibes: ['var(--font-great-vibes)', 'cursive'],  // 使用字体变量
        geist: ['var(--font-geist-sans)', 'sans-serif'],
        oswald: ['var(--font-oswald)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
