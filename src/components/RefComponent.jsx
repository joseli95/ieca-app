import { useRef } from 'react'

const RefComponent = () => {
  const inputRef = useRef()

  const focus = () => {
    console.log(inputRef)
    inputRef.current.focus()
  }

  return (
    <div className={"bg-slate-400 flex justify-center items-center w-full flex-1"} >
      <input type="text" id="input-element" ref={inputRef}/>
      <button onClick={focus}>Focus</button>
    </div>
  )
}

export default RefComponent
