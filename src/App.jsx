import './App.css'
import logo from './assets/react.svg'
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom'
import HelloWorld from './components/HelloWorld.jsx'
import SecondPage from './components/SecondPage.jsx'
import RefComponent from './components/RefComponent.jsx'
import ControlledComponent from './components/ControlledComponent.jsx'
import CounterComponent from './components/CounterComponent.jsx'
import TodoList from './components/TodoList.jsx'
import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <BrowserRouter>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Desarrollo Web con React - IECA</span>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
            </button>
          </div>
          <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto transition-all duration-700 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`}>
           <div className="text-sm lg:flex-grow">
              <Link to={"/hola-mundo"} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Hola Mundo
              </Link>
              <Link to={"/second"} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Segunda
              </Link>
              <Link to={"/ref"} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                useRef
              </Link>
              <Link to={"/controlled"} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Controlled component
              </Link>
              <Link to={"/contador"} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Custom hook
              </Link>
              <Link to={"/todo"} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Lista Todo
              </Link>
            </div>
          </div>
        </nav>
        <main className={"w-screen h-screen bg-slate-400 flex flex-col items-center justify-center"}>
          <Routes path={"/"}>
            <Route path={"/hola-mundo"} exact element={<HelloWorld/>}/>
            <Route path={"/second"} exact element={<SecondPage/>}/>
            <Route path={"/ref"} exact element={<RefComponent/>}/>
            <Route path={"/controlled"} exact element={<ControlledComponent/>}/>
            <Route path={"/contador"} exact element={<CounterComponent/>}/>
            <Route path={"/todo"} exact element={<TodoList/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
