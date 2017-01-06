const bindApp = require('./lib/bindApp')
const App = require('./components/App')
const store = require('./store')

bindApp({App, store})
