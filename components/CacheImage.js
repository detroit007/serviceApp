import React from 'react';
import CachedImage from 'react-native-image-cache-wrapper';

const CacheImage = (props) => <CachedImage {...props} source={props.source} />

export default CacheImage;