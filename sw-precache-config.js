module.exports = {
  staticFileGlobs: [
    'app/index.html',
    'app/images/**/*.*',
    'app/manifest.json',
    'https://fonts.googleapis.com/css?family=Lato:100,300'
  ],
  navigateFallback: 'index.html',
  stripPrefix: 'app/',
  runtimeCaching: [{
    urlPattern: /^https:\/\/fonts.googleapis.com\/.*/,
    handler: 'networkFirst'
  }],
  cacheId : 'hex-clock'
};
