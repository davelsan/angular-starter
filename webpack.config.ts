import * as purgecss from '@fullhuman/postcss-purgecss';

const purge = purgecss.default({
  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.html',
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

export default {
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: () => [
            require('postcss-import'),
            require('tailwindcss'),
            purge,
            require('autoprefixer')
          ]
        }
      }
    ]
  }
}
