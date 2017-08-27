module.exports = {
    "parser": "babel-eslint",
    "plugins": [
        "react"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "impliedStrict": true,
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    },
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "jest": true,
        "mocha": true
    },
    "globals": {
        "define": true,
        "__APIURL__": true,
        "log": true,
        "localStorage": true,
        "perf": true
    },
    "rules": {
        "strict": [
            "error",
            "global"
        ],
        "no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "all",
                "caughtErrors": "none"
            }
        ],
        "no-console": [
            "warn",
            {
                "allow": [
                    "warn",
                    "error"
                ]
            }
        ],
        "camelcase": [
            "error",
            {
                "properties": "always"
            }
        ],
        "consistent-return": "off",
        "arrow-spacing": "error",
        "quotes": [
            "error",
            "double",
            {
                "allowTemplateLiterals": true
            }
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-confusing-arrow": [
            "error",
            {
                "allowParens": false
            }
        ],
        "no-constant-condition": "error",
        "no-labels": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1,
                "maxEOF": 1
            }
        ],
        "func-style": "off",
        // ESLint-plugin-React
        // https://github.com/yannickcr/eslint-plugin-react
        "react/forbid-prop-types": [
            "error",
            {
                "forbid": [
                    "any"
                ]
            }
        ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "prefer-const": [
            "error",
            {
                "destructuring": "any"
            }
        ],
        "react/prefer-stateless-function": "warn",
        "react/jsx-boolean-value": "warn",
        "react/jsx-closing-bracket-location": "off",
        "react/jsx-curly-spacing": "warn",
        "react/jsx-indent-props": "off",
        "react/jsx-key": "warn",
        "react/jsx-max-props-per-line": "off",
        "react/jsx-no-bind": "off",
        "react/jsx-no-literals": "off",
        "react/jsx-sort-prop-types": "off",
        "react/jsx-sort-props": "off",
        "react/jsx-wrap-multilines": "error",
        "react/no-multi-comp": "warn",
        "react/no-set-state": "off",
        "react/prefer-es6-class": "warn",
        "react/self-closing-comp": "warn",
        "react/sort-comp": "off",
        "react/sort-prop-types": "off",
        "react/no-unescaped-entities": "off",
        "no-duplicate-imports": "warn",
        "no-useless-computed-key": "warn",
        "no-useless-rename": "warn",
        "object-shorthand": "warn",
        "prefer-destructuring": [
            "warn",
            {
                "object": true,
                "array": false
            }
        ],
        "prefer-rest-params": "warn",
        "no-var": "warn",
        "no-lonely-if": "warn"
    }
}