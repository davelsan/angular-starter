module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.html',
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
