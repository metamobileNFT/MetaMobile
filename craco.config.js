const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [{ plugin: CracoLessPlugin }],
  style: {
    postcss: {
      plugins: [
        require("postcss-import"),
        require("tailwindcss"),
        require("autoprefixer"),
      ],
    },
  },
};
