const { environment } = require('@rails/webpacker')

const webpack = require('webpack')

environment.plugins.append('Provide',
    new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        Proper: ['popper.js', 'default']
    })
)

environment.loaders.get('sass').use.splice(-1, 0, {
    loader: 'resolve-url-loader'
  })

module.exports = environment