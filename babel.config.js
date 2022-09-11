const test = process.env.NODE_ENV === 'test';

module.exports = {
  plugins: [
    '@babel/plugin-transform-modules-commonjs',
    ...(test ? ['babel-plugin-transform-import-meta'] : [])
  ],
  presets: [
    ['@babel/preset-env', { targets: {node: 'current' } }],
    '@babel/preset-typescript',
  ],
};