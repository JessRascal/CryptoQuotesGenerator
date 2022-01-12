module.exports = {
  content: ['./src/*.{html,js}'],
  theme: {
    extend: {
      width: {
        430: '430px',
      },
      height: {
        265: '265px',
      },
      textColor: {
        'high-emphasis': 'rgba(0, 0, 0, 0.87)',
        'medium-emphasis': 'rgba(0, 0, 0, 0.6)',
        disabled: 'rgba(0, 0, 0, 0.38)',
      },
    },
  },
  plugins: [],
};
