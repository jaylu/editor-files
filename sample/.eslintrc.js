// http://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parserOptions: {
		parser: "babel-eslint",
		sourceType: 'module'
	},
	env: {
		browser: true
	},
	// https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
	extends: [
		'standard',
		'@vue/standard',
		'plugin:vue/essential'
	],
	// required to lint *.vue files
	plugins: [
		'vue'
	],
	// add your custom rules here
	'rules': {
		// allow paren-less arrow functions
		'arrow-parens': 0,
		// allow async-await
		'generator-star-spacing': 0,
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		"space-before-function-paren": 0,
		"padded-blocks": 0,
		"no-trailing-spaces": 0,
		"no-multiple-empty-lines": 0,
		"indent": 0,
		"no-tabs": 0,
		"no-mixed-spaces-and-tabs": 0,
		"semi": 0,
		"one-var": 0,
		"spaced-comment": 0,
		"camelcase": 0,
		"object-curly-spacing": 0
	}
}
