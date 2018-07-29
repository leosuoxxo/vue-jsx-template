module.exports = {
  presets: ['@vue/app'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    'transform-class-properties'
  ]
};
