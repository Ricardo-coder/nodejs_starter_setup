module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@clients': './src/clients',
        '@graphql': './src/graphql',
        '@middlewares': './src/middlewares'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
