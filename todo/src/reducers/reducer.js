export const initialState = [{
  todo: '',
  completed: false,
  id: Date()
}]

export const reducer = (state, action) => {
  switch(action.type) {
      case "ADD_TODO":
          return [
              ...state,
              action.payload
          ]
      case "COMPLETED":
          return state.map((item) => {
              return item.id === action.payload ?
              {...item, completed: !item.completed} :
              item
          })
      case "CLEAR_COMPLETED" :
          return state.filter((item) => !item.completed)

      default:
          return state
  }


} 

