module.exports = {
    index: path.resolve(__dirname, '../docs/index.html'),
    assetsRoot: path.resolve(__dirname, '../docs'),
    assetsPublicPath: '',
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/build-a-bot/'
        : '/',
    devServer: {
        proxy: {
            '/api/*': {
                target: 'http://localhost:8081',
                changeOrigin: true,
            },
        },
    },
};
