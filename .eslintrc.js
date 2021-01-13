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
		'simple-import-sort',
		'sort-destructure-keys',
		'typescript-sort-keys',
		'jsx-a11y',
		'tsdoc',
		'prettier',
	],
	extends: [
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		"plugin:jsx-a11y/recommended",
		'plugin:promise/recommended',
		"plugin:react/recommended",
		'plugin:react-hooks/recommended',
		'standard',
		"standard-jsx",
		"standard-react",
		'standard-with-typescript',
		'prettier',
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
