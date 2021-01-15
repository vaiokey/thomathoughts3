module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2020,
		project: './tsconfig.json',
		useJSXTextNode: true,
	},
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	plugins: [
    'typescript-sort-keys',
    'prettier',
    'react-hooks',
    'simple-import-sort',
    'sort-destructure-keys',
    'tsdoc',
    'jsx-a11y'
  ],
  extends: [
    'standard-with-typescript',
    'standard-react',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier/standard'
  ],
	rules: {
		'react/react-in-jsx-scope': 'off',
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
		"sort-destructure-keys/sort-destructure-keys": 2,
		"typescript-sort-keys/interface": "error",
		"typescript-sort-keys/string-enum": "error"
	},
	overrides: [
		{
			files: ['*.stories.tsx'],
			rules: {
				'@typescript-eslint/consistent-type-assertions': 'off'
			}
		}
	]
}
