import './App.css'
import { ControlledInput } from './components/controlled_input/ControlledInput'
import { UncontrolledInput } from './components/uncontrolled_input/UncontrolledInput'
import { ReactFormHook } from './components/ReactFormHook/ReactFormHook'

function App() {

  return (
    <>
      <h1>Kontaktformular</h1>
      <ControlledInput />
      {/* <UncontrolledInput /> */}
      {/* <ReactFormHook /> */}
    </>
  )
}

export default App
