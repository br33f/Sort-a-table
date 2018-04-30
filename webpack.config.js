module.exports = {
    entry: './js/script.js',
    output: {
        path: `${__dirname}/bundle`,
        filename: 'bundle.js'
    },
    watch: true,
    mode: "development", 
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [["env", {
                            targets: {
                                browsers: ['> 1%', 'last 2 versions']
                            }
                        }]]
                    }
                }
            }
        ]
    }
}