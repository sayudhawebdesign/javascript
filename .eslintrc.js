module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "plugins": "prettier/recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "linebreak-style": 0,
        "no-console": 0,
        "no-underscore-dangle": 0,
        "import/no-extraneous-dependencies": 0,
        "no-plusplus": 0
    }
};