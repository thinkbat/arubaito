const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const extractUtilityCSS = new ExtractTextPlugin('utility.min.css');
const extractComponentCSS = new ExtractTextPlugin('arubaito_component.min.css');
const extractSvgSprite = new SpriteLoaderPlugin();

const reactComponentConfig = {
  entry: path.resolve(__dirname, './src/arubaito/lib/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs',
    umdNamedDefine: true,
  },
  resolve: {
    modules: [
      path.resolve('./src/arubaito'),
      path.resolve('./src/gdm-tokens/assets'),
      path.resolve('./node_modules'),
    ],
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      '@tokens': path.resolve(__dirname, './dist'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, './src/arubaito/lib/'),
        ],
        use: extractUtilityCSS.extract([
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]),
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, './src/arubaito/components/'),
        ],
        use: extractComponentCSS.extract([
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              sourceMap: true,
              importLoaders: 1,
            },
          },
          'postcss-loader',
          'sass-loader',
        ]),
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        options: {
          spriteFilename: 'gdm-sprite-[hash].svg',
          extract: true,
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash].[ext]',
              outputPath: '/assets/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    extractSvgSprite,
    extractUtilityCSS,
    extractComponentCSS,
  ],
  target: 'node', // important in order not to bundle built-in modules like path, fs, etc.
  externals: [nodeExternals({
    // this will include all assets from node modules, required to bundle the components
    // keep an eye on the build Oo
    whitelist: [/\.(?!(?:jsx?|json|js|css|scss)$).{1,5}$/i],
  })],
};

module.exports = [
  reactComponentConfig,
];
