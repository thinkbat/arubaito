const StyleDictionary = require('style-dictionary');
const hexToRgba = require('hex-to-rgba');
const snakeCase = require('lodash.snakecase');



console.log('Build started...');
console.log('Reading config file from ./config.json');
console.log('\n==============================================');



// REGISTER CUSTOM FILTERS, TRANSFORMS ETC.

// This makes sure we don't include assets in our scss variables
StyleDictionary.registerFilter({
  name: 'notAssets',
  matcher: function(prop) {
    return prop.attributes.category !== 'asset';
  }
});

//
// BRAND FILTERS (THEMING)
//

// Only include GDM Tokens
StyleDictionary.registerFilter({
  name: 'gdm',
  matcher: function(prop) {
    return prop.path.includes('gdm');
  }
});

// Only include GDM Tokens without Assets
StyleDictionary.registerFilter({
  name: 'gdm-no-assets',
  matcher: function(prop) {
    return prop.path.includes('gdm') && prop.attributes.category !== 'asset';
  }
});

// Only include GDM Icons
StyleDictionary.registerFilter({
  name: 'gdm-icons',
  matcher: function(prop) {
    return prop.path.includes('gdm') && prop.attributes.category === 'asset' && prop.attributes.type === 'icon';
  }
});

// Only include GDM Fonts
StyleDictionary.registerFilter({
  name: 'gdm-fonts',
  matcher: function(prop) {
    return prop.path.includes('gdm') && prop.attributes.category === 'asset' && prop.attributes.type === 'font';
  }
});

// This transform will remove the GDM key from the token
StyleDictionary.registerTransform({
  name: 'name/cti/constant/no-gdm',
  type: 'name',
  transformer: function(prop, options) {
    return snakeCase( [options.prefix].concat(prop.path).join(' ') ).toUpperCase().replace('GDM_', '');
  }
});

//                          //
// ------------------------ //


StyleDictionary.registerTransform({
  name: 'size/pxWithExcludes',
  type: 'value',
  matcher: function(prop) {
    return prop.attributes.category === 'size' && prop.attributes.type !== 'icon';
  },
  transformer: function(prop) {
    if (prop.attributes.nopx == 'true') {
      return prop.value;
    } else {
      return parseFloat(prop.value, 10) + 'px';
    }
  }
});


// transform for colors, if the attributes.opacity property is defined, we want to translate hex to rgba
StyleDictionary.registerTransform({
  name: 'color/hexToRgba',
  type: 'value',
  matcher: function(prop) {
    return prop.attributes.category === 'color' && !!prop.attributes.opacity;
  },
  transformer: function(prop) {
    return hexToRgba(prop.value, prop.attributes.opacity);
  }
});


// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/config.json');



// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionaryExtended.buildAllPlatforms();



console.log('\n==============================================');
console.log('\nBuild completed!');