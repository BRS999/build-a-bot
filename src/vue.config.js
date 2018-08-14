module.exports = {
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
