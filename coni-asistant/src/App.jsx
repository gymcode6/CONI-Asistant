//import { useState } from 'react'
import { AudioRecorder } from './components/AudioRecorder'
// import { ButtonAudioRec } from './components/ButtonAudioRec'

import './App.css'

function App() {

  return (
    <div className='main'>
    <h2>Click the button to transcribe</h2>

      <AudioRecorder />


    </div>
  )
}

export default App
