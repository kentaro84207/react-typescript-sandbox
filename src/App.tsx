import React, { FC, useReducer, useMemo, useCallback } from 'react'
import { reducer, initialState } from './reducer'
import { increment, decrement } from './actionCreaters'

type Props = {
  countLabel: string
  onClickIncrement: () => void
  onClickDecrement: () => void
}

const Component: FC<Props> = props => (
  <div>
    Count: {props.countLabel}
    <button onClick={props.onClickIncrement}>+</button>
    <button onClick={props.onClickDecrement}>-</button>
  </div>
)

const Container: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState({ count: 0 }))
  const countLabel = useMemo(() => `${state.count} ${state.unit}`, [state])
  const onClickIncrement = useCallback(() => dispatch(increment()), [])
  const onClickDecrement = useCallback(() => dispatch(decrement()), [])

  return (
    <Component
      countLabel={countLabel}
      onClickIncrement={onClickIncrement}
      onClickDecrement={onClickDecrement}
    />
  )
}

export default Container;
