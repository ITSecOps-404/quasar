module.exports = {
  parserOptions: {
    sourceType: 'module'
  },

  settings: {
    'lodash-template/globals': [
      // Base
      'name',
      'description',
      'author',

      // Quasar v2
      'quasarVersion',
      'scriptType',
      'productName',

      // Quasar v2 - JS
      'css',
      'preset',
      'lintConfig'
    ]
  }
}
