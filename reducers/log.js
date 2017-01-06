module.exports = logReducer

function logReducer(state = [], action) {
  switch (action.type) {
    case 'LOG':
      console.log(action.payload)
      return state.concat(action.payload)
    default:
      return state
  }
}
