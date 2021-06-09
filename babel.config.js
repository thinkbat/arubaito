module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    // ["module-resolver", { "root": ["./src"] }]
    ['react-css-modules', {
      // "context"            : "./src/arubaito/components",
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      attributeNames: { moduleClassName: 'className' },
      autoResolveMultipleImports: true,
      filetypes: {
        '.scss': {
          syntax: 'postcss-scss',
          plugins: [
            'postcss-nested',
          ],
        },
      },
    }],
  ],
};
