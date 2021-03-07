
module.exports = {
    dev: {
        proxyTable: {
            '/api': {
                target: 'http://localhost:8080',
                pathRewrite: {
                    '^/api': '/static/mock'
                }
            }
        }
    }
}