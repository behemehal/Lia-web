const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
module.exports = withPlugins([
  [optimizedImages, {
    mozjpeg: {
      quality: 80,
    },
    pngquant: {
      speed: 3,
      strip: true,
      verbose: true,
    },
    imagesPublicPath: '/Lia-web/_next/static/images/',
  }],
  {
    basePath: '/Lia-web',
    assetPrefix: '/Lia-web/',
    env,
  },
]);