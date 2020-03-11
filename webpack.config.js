const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.html',
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "postcss-loader",
        options: {
          ident: "postcss",
          plugins: () => [
            require("postcss-import"),
            require("tailwindcss"),
            purgecss,
            require("autoprefixer")
          ]
        }
      }
    ]
  }
};
