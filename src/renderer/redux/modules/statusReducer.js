const initialState =  []

const statusReducer = (state = initialState, action) => {

  switch(action.type) {

    case 'ADD_LINES':
      let lines = action.lines
      let newLines = []
      lines.map(line => {
        newLines.push({line, actor: 10})
      })
      return state.concat(newLines)

    case 'ADD_LINE':
      return state.concat({line: action.line, actor: 0, position: "left"})

    case 'ADD_LINE_BY_USER':
      return state.concat({line: action.line, actor: 1, position: "right"})

    default:
      return state
  }
}

export const getLines = state => state.status

export default statusReducer
