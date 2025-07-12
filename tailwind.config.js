module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBlue: "#1E40af",
        mediumBlue: "#3D6EFF",
        lightBlue: "#A1B7FF",
        beigeBackground: "#f5ede1",
        lightBrown: "#C28E4A",
        mediumBrown: "#BF8147",
        darkBrown: '#8A5B27',
      },
      borderRadius: {
        small: "0.25rem",
        medium: "0.5rem",
        normal: "1rem"
      },
      spacing: {
        small: '0.25rem',
        medium: '0.5rem',
        normal: '1rem',
        large: '1.5rem',
      },
      fontSize: {
        small: '0.5rem',
        normal: '1rem',
        large: '2rem',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};