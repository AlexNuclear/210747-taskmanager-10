const path = require(`path`)

module.exports = {
    mode: `development`,
    entry: `./src/main.js`,
    output: {
        fileName: `bundle.js`,
        path: path.join(__dirname, `public`)
    },
    devtool: `source-map`
}