const bel = require('bel')

module.exports = App

function App(state, dispatch) {
  return bel`
    <h1 onclick=${_ => dispatch({type: 'LOG', payload: 'hello world'})}>
      Hello World
    </h1>
  `
}
