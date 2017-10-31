'use strict';
var ModernizrWebpackPlugin = require('modernizr-webpack-plugin');

module.exports = {
    modify( config, { target, dev }, webpack ) {

        const newConfig = config;
        /**
         * Allow markdown loading
         */
        const markdownLoader = {
            test: /\.md$/,
            use: [
                {
                    loader: "html-loader"
                },
                {
                    loader: "markdown-loader",
                }
            ]
        };

        const additionalLoader = [
            {
                test: /\.styl$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                    loader: 'css-loader'
                    },
                    {
                    loader: 'stylus-loader'
                    }
                ]
            }

        ]

        const fileLoaderIndex = newConfig.module.rules.findIndex(
            rule => rule.exclude
        );

        newConfig.module.rules[fileLoaderIndex].exclude.push(/\.md$/)
        newConfig.module.rules.push(markdownLoader)
        additionalLoader.map(loader => {
            newConfig.module.rules.push(loader)

        })
        /**/
        /**
         * Allow for `__filename` and `__dirname` in
         * modules
         */

        // insert modernizr
        var modernizr_config = dev ? {} : {
            minify: {
                output: {
                    comments: true,
                    beautify: true
                }
            }
        }

        newConfig.plugins.push(new ModernizrWebpackPlugin(modernizr_config))

        newConfig.context = __dirname
        const node_conf ={ __filename: true,
            __dirname: true
        }

        newConfig.node = {...newConfig.node, ...node_conf}

        return newConfig;
    },
};