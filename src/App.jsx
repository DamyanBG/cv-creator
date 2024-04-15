import { CvInfoProvider } from './context/CvInfoProvider'
import MainComponent from './components/MainComponent'

import './App.css'

function App() {

  return (
    <CvInfoProvider>
      <MainComponent />
    </CvInfoProvider>
  )
}

export default App
