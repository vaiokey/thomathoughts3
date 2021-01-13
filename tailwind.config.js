const plugin = require('tailwindcss/plugin')

const colors = {
  "brand":"#409cff",
  "white": "#fff",
  "greyple":"#99aab5",
  "dark-not-black":"#2c2f33",
  "focus-border":"#00b0f4",
  "status-green":"#43b581",
  "text-link":"#00b0f4",
  "not-quite-black":"#23272a",
  "black":"#000"
}

module.exports = {
  purge: [
		'./src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
		extend: {
      colors,
      backgroundColor:colors,
      borderColor:colors,
    },
	},
	variants: {
		extend: {
			margin:['first'],
			outline: ['dark']
		},
	},
	plugins: [
    plugin(({ addVariant, e }) => {
      addVariant('before', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`before${separator}${className}`)}::before`;
        });
      });
      addVariant('after', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`after${separator}${className}`)}::after`;
        });
      });
    }),
    plugin(({ addUtilities }) => {
      const contentUtilities = {
        '.content': {
          content: 'attr(data-content)',
        },
        '.content-before': {
          content: 'attr(data-before)',
        },
        '.content-after': {
          content: 'attr(data-after)',
        },
        '.content-none': {
          content: "''",
        }
      };
      addUtilities(contentUtilities, ['before', 'after']);
    }),
  ],
}
