module.exports = {
  // purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        '1/10': '10%',
        288: '72rem',
      },
      fontSize: {
        // '160px': 'rem',
        '160px': '10rem',
        '172px': '12rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('daisyui')
  ],
};
