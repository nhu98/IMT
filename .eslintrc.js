module.exports = {
  "root": true,
  "extends": '@react-native-community',
  "parser": '@typescript-eslint/parser',
  "plugins": ['@typescript-eslint'],
  "rules": {
    "react-hooks/exhaustive-deps": "off"
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
};
