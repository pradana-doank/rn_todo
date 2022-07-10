import TodoModel from '../src/data/TodoModel'

type TodoActionType =
  | {
      type: 'addTodo'
      payload: TodoModel
    }
  | {
      type: 'deleteTodo'
      payload: TodoModel
    }
  | {
      type: 'updateTodo'
      payload: TodoModel
    }

const initialTodos: TodoModel[] = []

const todoReducer = (state: typeof initialTodos, action: TodoActionType) => {
  switch (action.type) {
    case 'addTodo':
      state = [...state, action.payload]
    case 'deleteTodo':
    // const currentTodos = state
    // const currentIndex = currentTodos.findIndex(
    //   (todo) => todo.key === action.payload.key
    // )
    // currentTodos.splice(currentIndex, 1)
    // state = currentTodos
    // return state

    case 'updateTodo':
      const currentTodos = state
      const currentIndex = currentTodos.findIndex(
        (todo) => todo.key === action.payload.key
      )
      currentTodos[currentIndex] = { ...action.payload, isCompleted: true }
      state = currentTodos

    default:
      return state
  }
}

export { initialTodos, todoReducer }
