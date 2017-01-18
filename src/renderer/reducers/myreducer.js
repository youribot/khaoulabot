const initialState =  []

const myreducer = (state = initialState, action) => {
  
  switch(action.type) {

    case 'ADD_LINES':
      let lines = action.lines
      let newLines = []
      lines.map(line => {
        newLines.push({line, actor: 10})
      }) 
      return state.concat(newLines)
      //return state.concat({line: lines.join('\n'), actor: 0})

    case 'ADD_LINE':
      return state.concat({line: action.line, actor: 0})

    case 'ADD_LINE_BY_USER':
      return state.concat({line: action.line, actor: 1})

    default:
      return state
  }
}

export const getLines = state => state.mystatus

export default myreducer