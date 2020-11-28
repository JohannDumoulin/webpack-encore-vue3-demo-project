const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project
    content: [
        'public/index.html',
        'src/App.vue',
        'src/**/*.vue',
    ],

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

const isProd = process.env.npm_lifecycle_script.includes('encore production');

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        ...isProd ? [purgecss] : [],
    ]
};
