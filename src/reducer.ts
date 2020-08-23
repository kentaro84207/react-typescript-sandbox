import types from './actionTypes'
import { increment, decrement, setCount } from './actionCreaters'

// __________________________________________
//
type State = {
  count: number
  unit: string
}

type IncrementAction = ReturnType<typeof increment>
type DecrementAction = ReturnType<typeof decrement>
type SetCountAction = ReturnType<typeof setCount>

type Actions = IncrementAction | DecrementAction | SetCountAction
// __________________________________________
//
const initialState = (injects?: Partial<State>): State => {
  return {
    count: 0,
    unit: 'px',
    ...injects
  }
}
// __________________________________________
//
const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case types.INCREMENT:
      return { ...state, count: state.count + 1 }
    case types.DECREMENT:
      return { ...state, count: state.count - 1 }
    case types.SET_COUNT:
      return { ...state, count: action.payload.amount }
    default:
      throw new Error()

  }
}
// __________________________________________
//
export { reducer, initialState }
