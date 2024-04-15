import CreateCVForm from './components/CreateCVForm'

import './App.css'
import { CvInfoProvider } from './context/CvInfoProvider'

function App() {

  return (
    <CvInfoProvider>
      <CreateCVForm />
    </CvInfoProvider>
  )
}

export default App
