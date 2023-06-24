import useCounter from '../hooks/useCounter.js'

const CounterComponent = () => {
  const {counter, increment, decrement} = useCounter(0)

  return (
    <div className={"bg-gray-200 flex-1 w-full"}>
      <h1 className={"text-blue-700 text-5xl"}>{counter}</h1>
      <div>
        <button onClick={increment}>Incrementar</button>
        <button onClick={decrement}>Decrementar</button>
      </div>
    </div>
  )
}

export default CounterComponent
