module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    mode: 'all',
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.ts',
    ],
  },
  theme: {
    extend: {
      rotate: {
        '-5': '-5deg',
      },
      spacing: {
        '14': '3.5rem',
        '68': '17rem',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    margin: ['responsive', 'last'],
  },
  plugins: [ ],
};
