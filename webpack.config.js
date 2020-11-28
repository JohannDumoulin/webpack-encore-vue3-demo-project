const Encore = require('@symfony/webpack-encore');

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    .enableSourceMaps(!Encore.isProduction())

    .addEntry(
        'app', [
            './src/main.js',
            './src/assets/css/main.scss',
        ]
    )

    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableVueLoader()

    .copyFiles({
        from: './src/assets/img',

        // optional target path, relative to the output dir
        to: 'images/[path][name].[ext]',

        // if versioning is enabled, add the file hash too
        //to: 'images/[path][name].[hash:8].[ext]',

        // only copy files matching this pattern
        //pattern: /\.(png|jpg|jpeg)$/
    })

    .enableSassLoader()
    .enablePostCssLoader()
// ...
;

const config = Encore.getWebpackConfig()

// config = Encore.getWebpackConfig();
config.watchOptions = {
    poll: true,
    ignored: /node_modules/
}
// export the final configuration
module.exports      = config
