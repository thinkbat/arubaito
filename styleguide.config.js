// const nodeExternals = require('webpack-node-externals');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const Tokens = require('./dist/variables-module');

const extractUtilityCSS = new ExtractTextPlugin('utility.min.css');
const extractComponentCSS = new ExtractTextPlugin('arubaito_component.min.css');
const extractSvgSprite = new SpriteLoaderPlugin();
const { version } = require('./package.json');

const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  template: {
    head: {
      // scripts: [
      //   {
      //     src: 'assets/js/babelHelpers.min.js'
      //   }
      // ],
      // links: [
      //   {
      //     rel: 'stylesheet',
      //     href:
      //       '/build/styles.css'
      //   }
      // ]
    },
  },
  theme: {
    color: {
      base: Tokens.color.base.gdm.brand.primary.value,
      link: Tokens.color.base.gdm.light.value,
      linkHover: Tokens.color.base.gdm.brand.secondary.value,
      sidebarBackground: Tokens.color.base.gdm.brand.primary.value,
      border: Tokens.color.base.gdm.dark.value,
    },

    // fontFamily: {
    //   base: 'Graphik, san-serif'
    // }
  },
  styles: {
    ReactComponent: {
      root: {
        paddingBottom: '65px',
        borderBottom: `10px solid ${Tokens.color.base.gdm.brand.primary.value}`,
        marginBottom: '100px',
      },
    },
    SectionHeading: {
      wrapper: {
        // marginTop: '85px',
        // marginBottom: '-75px'
        // paddingTop: '14px',
        // paddingBottom: '14px',
        // borderTop: `43px solid ${Tokens.color.base.brand.secondary.value}`,
        // borderBottom: `2px solid ${Tokens.color.base.brand.secondary.value}`,
      },
    },
    heading: {
      color: Tokens.color.base.gdm.brand.primary.value,
    },
    Logo: {
      // We're changing the LogoRenderer component
      logo: {
        // We're changing the rsg--logo-XX class name inside the component
        color: Tokens.color.base.gdm.light.value,
      },
    },
    Playground: {
      preview: {
        border: 'none',
        backgroundColor: Tokens.color.base.gdm.box.value,
        borderRadius: '0',
      },
    },
  },
  components: 'src/arubaito/components/**/*.js',
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.jsx?$/, '.examples.md');
  },
  sections: [
    {
      name: 'Components',
      sections: [
        {
          name: 'Atoms',
          components: 'src/arubaito/components/atoms/**/*.js',
        },
        {
          name: 'Molecules',
          components: 'src/arubaito/components/molecules/**/*.js',
        },
        {
          name: 'Organisms',
          components: 'src/arubaito/components/organisms/**/*.js',
        },
      ],
    },
    {
      name: 'Design System',
      sections: [
        {
          name: 'Fonts',
          components: 'src/arubaito/design-system/font-styles/**/*.js',
        },
        {
          name: 'Grid Layout',
          components: 'src/arubaito/design-system/grid/**/*.js',
        },
        {
          name: 'Table',
          components: 'src/arubaito/design-system/table/**/*.js',
        },
        {
          name: 'Icons',
          components: 'src/arubaito/design-system/icons/**/*.js',
        },
        {
          name: 'Tokens',
          components: 'src/arubaito/design-system/tokens//**/*.js',
        },
      ],
    },
  ],
  skipComponentsWithoutExample: true,
  defaultExample: true,
  // eslint-disable-next-line max-len
  ignore: ['**/__tests__/**', '**/*index.js', '**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}', '**/*.styles.{js,jsx,ts,tsx}', '**/*.d.ts'],
  require: ['./src/arubaito/css/styleguidist-styles.scss'],
  webpackConfig: {
    resolve: {
      modules: [
        path.resolve('./src/arubaito'),
        path.resolve('./src/gdm-tokens/assets'),
        path.resolve('./node_modules'),
      ],
      alias: {
        '@tokens': path.resolve(__dirname, './dist/gdm-tokens/web'),
      },
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.scss?$/,
          include: [
            path.resolve(__dirname, './src/arubaito/components'),
            path.resolve(__dirname, './src/arubaito/design-system'),
          ],
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                },
                sourceMap: true,
                importLoaders: 1,
                // options: {
                //   import: (parsedImport, resourcePath) => {
                //     // parsedImport.url - url of `@import`
                //     // parsedImport.media - media query of `@import`
                //     // resourcePath - path to css file

                //     // Don't handle `style.css` import
                //     // if (parsedImport.url.includes('gdm-design-tokens')) {
                //     if (false) {
                //       return false;
                //     }

                //     return true;
                //   },
                // }
              },
            },
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
        {
          test: /\.scss?$/,
          include: [
            path.resolve(__dirname, './src/arubaito/css/'),
          ],
          use: PRODUCTION
            ? extractUtilityCSS.extract([
              'css-loader',
              'postcss-loader',
              'sass-loader',
            ])
            : [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
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
  },
  version,
};
