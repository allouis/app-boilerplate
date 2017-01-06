const morphdom = require('morphdom')
const onBeforeElUpdated = require('copy-event-attributes')

module.exports = bindApp

function bindApp({App, store, el = document.body}) {
  renderApp()
  store.subscribe(renderApp) 
  function renderApp() {
    el = morphdom(el, App(store.getState(), store.dispatch), { onBeforeElUpdated })
  }
}
