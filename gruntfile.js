module.exports = function (grunt)  {

    grunt.loadNpmTasks('grunt-ts');
    
    grunt.initConfig({
        ts: {
            // https://github.com/TypeStrong/grunt-ts
            options: {                    // use to override the default options, http://gruntjs.com/configuring-tasks#options
                target: 'es5',            // es3 (default) / or es5
                module: 'amd',            // amd , commonjs (default)
                sourceMap: true,          // true  (default) | false
                declaration: false,       // true | false  (default)
                noLib: false,             // true | false (default)
                comments: false,          // true | false (default)
                moduleResolution: "node", // node, classic (default for --module AMD | System | ES2015)
                fast: "never"             // 
            },
            default: {
                //watch: ".",
                files: {
                    "dist/client.js": "libs/clients/*.ts"
                }
            }
        }
    });
};