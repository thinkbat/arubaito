import React from 'react';


// prepare the new tokens objects and return them as a flat array
export const transformTokens = (tokens, category) => {
  const tokenData = deepTransform(tokens[category], category);
  const tokenDataFlat = tokenData.flat(Infinity);
  return tokenDataFlat;
}

// deep transform tokens
const deepTransform = (obj, parentKey) => {
  if (!obj) return;
  return Object.keys(obj).map((key) => {
    if (obj[key] && obj[key].value) {
      return {
        key: `${key}-${obj[key].name}`,
        value: obj[key].value,
        description: obj[key].description || obj[key].attributes.description,
        name: obj[key].name,
        item: obj[key].attributes.item,
        subitem: obj[key].attributes.subitem
      };
    } else {
      return deepTransform(obj[key], `${parentKey}-${key}`);
    };
  });
}

// separate tokens by category
export const prepareTokenCategory = (tokens) => {
  const tokensHash = {};
  Object.keys(tokens).forEach((tokenKey) => {
    tokensHash[tokenKey] = transformTokens(tokens, tokenKey);
  });
  return tokensHash;
};

// Spacer is being used for add space inside .md files
export const Spacer = ({ size = '10px' }) => (
  <span style={{marginRight: size}}></span>
);