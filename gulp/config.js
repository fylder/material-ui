var dest = './build',
    src = './src',
    mui = './node_modules/material-ui/src';

module.exports = {
    browserSync: {
        server: {
            // We're serving the src folder as well
            // for sass sourcemap linking
            baseDir: [dest, src]
        },
        files: [
            dest + '/**'
        ],
        port: 8081,
        startPath: "/login.html"
    },
    markup: {
        src: src + "/www/**",
        dest: dest
    },
    browserify: {
        // Enable source maps
        debug: true,
        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [{
            entries: src + '/app/app.js',
            dest: dest,
            outputName: 'app.js',
        }, {
            entries: src + '/app/register.js',
            dest: dest,
            outputName: "register.js"
        }],
        extensions: ['.js'],

    }
};
