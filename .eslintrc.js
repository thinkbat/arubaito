module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "airbnb",
        "airbnb/hooks"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "linebreak-style": 0,
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ],
        "import/no-extraneous-dependencies": [
            "error",
            {
                "packageDir": "./"
            }
        ],
        "import/no-unresolved": [
            2,
            {
                "ignore": [
                    "arubaito",
                    "@listings/*"
                ]
            }
        ],
        "arrow-parens": [
            2,
            "as-needed",
            {
                "requireForBlockBody": true
            }
        ],
        "no-use-before-define": [
            "error",
            {
                "functions": false
            }
        ],
        "max-len": [
            "error",
            {
                "code": 125
            }
        ]
    }
}