import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import { fixupConfigRules } from '@eslint/compat';

// Create a new object without leading/trailing whitespace in keys
const cleanGlobals = {};
for (const key in globals.browser) {
  cleanGlobals[key.trim()] = globals.browser[key];
}

export default [
  {
    languageOptions: {
      globals: cleanGlobals,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.jsx'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  ...fixupConfigRules(pluginReactConfig),
];
