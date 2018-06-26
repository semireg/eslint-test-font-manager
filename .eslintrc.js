module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 5,
        "sourceType": "module"
    },
    
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": "off",
        "import/no-unresolved": "error",
        "import/no-extraneous-dependencies": "off"
    },
    "plugins": [
        "import"
      ],
    "settings": {
    },
};