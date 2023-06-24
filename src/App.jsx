import './App.css'
import logo from './assets/react.svg'
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom'
import HelloWorld from './components/HelloWorld.jsx'
import SecondPage from './components/SecondPage.jsx'
import RefComponent from './components/RefComponent.jsx'
import ControlledComponent from './components/ControlledComponent.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <main className={"w-screen h-screen bg-slate-400 flex flex-col items-center justify-center"}>
          <img src={logo} className={"w-44"} alt=""/>
          <h1 className={"text-4xl font-bold"}>Desarrollo web con React - IECA</h1>
          <div className={"flex gap-4 py-4"}>
            <Link to={"/hola-mundo"} className={"font-bold text-2xl text-blue-700"}>
              Hola Mundo
            </Link>
            <Link to={"/second"} className={"font-bold text-2xl text-blue-700"}>
              Segunda
            </Link>
            <Link to={"/ref"} className={"font-bold text-2xl text-blue-700"}>
              useRef
            </Link>
            <Link to={"/controlled"} className={"font-bold text-2xl text-blue-700"}>
              Controlled component
            </Link>
          </div>


          <Routes path={"/"}>
            <Route path={"/hola-mundo"} exact element={<HelloWorld/>}/>
            <Route path={"/second"} exact element={<SecondPage/>}/>
            <Route path={"/ref"} exact element={<RefComponent/>}/>
            <Route path={"/controlled"} exact element={<ControlledComponent/>}/>
          </Routes>

        </main>
      </BrowserRouter>
    </>
  )
}

export default App
