module.exports = {
    "/main/api": require('./controllers/index'),
    "/main/api_rus": require('./controllers/index_rus'),
    "/mpanel": require('./controllers/mpanel'),
    "/auth": require('./controllers/auth'),
    "/messages": require('./controllers/messages'),
    "/search": require('./controllers/search')
}