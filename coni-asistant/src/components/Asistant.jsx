import micro from '../assets/micro.png'
import { useState } from 'react'
import axios from 'axios';

import Logo from './Logo'
/*import output from '../static/output.mp3'*/
export default function Asistant() {
    const [recording, setRecording] = useState(false);
    /*const [audioBlob, setAudioBlob] = useState(null);*/
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [txResponse, setTxResponse] = useState('');
    /*const [flResponse, setFlResponse] = useState(null);*/
    /*const [handle, setHandle] = useState(false);*/

    const startRecording = async () => {
        console.log('start recording')
        try {
            const stream = await navigator.mediaDevices.getUserMedia({audio: true});
            const recorder = new MediaRecorder(stream);
            console.log(recorder.state)

            let chunks = [];

            recorder.ondataavailable = (e) => {
                chunks.push(e.data)
            };

            recorder.onstop = async () => {
                const blob = new Blob(chunks, { type: 'audio/mpeg' });
                await handleUpload(blob);
            };

            recorder.start();
            setRecording(true);
            setMediaRecorder(recorder);
            /*setHandle(true);*/
        } catch (error) {
            console.error('Error accessing microphone:', error);
        }
    };

    const stopRecording = () => {
        console.log(mediaRecorder);
        console.log(mediaRecorder.state)
        
        if (mediaRecorder && mediaRecorder.state === 'recording') {
          console.log('stop recording');
          mediaRecorder.stop();
          setRecording(false);
          setMediaRecorder(null);
          /*setHandle(false)*/
        }
      };

    const handleUpload = async (blob) => {
        console.log("start upload");

            const formData = new FormData();
            formData.append('audio', blob, 'audio');
            console.log('create form data');

            try {
                const response = await axios.post('http://127.0.0.1:5000/', formData);
                console.log('recive response')
                if (response.ok) {
                    const Response = await response.json();
                    setTxResponse(Response.text);
                    const audio = new Audio('data:audio/mp3;base64,' + Response.file);
                    audio.play();

                    console.log(Response.text);

                    console.log('Upload successful');
                }
                else {
                    console.error('failed upload audio')
                }
            } catch (error) {
                console.error('error uploading audio:', error)
            }
        }
    /*const playAudio = async (flAudio) => {
        const urlAudio = new Audio(flAudio);
        await urlAudio.play().catch((error) => {
            console.error('Error playing audio:', error);
        });
    };*/


    return (

        <div className='flex flex-col items-center justify-center m-40'>

            <Logo />
            <h2>click the button to start recording</h2>
            {!recording ? (<button className=" flex items-center justify-center w-20 h-20 my-10 bg-gradient-to-r from-red-600 to-orange-500 rounded-full" onClick={startRecording} disabled={recording}>
                <img className='micro' src={micro} alt="micro"></img>
                </button>
            ) : <button className=" flex items-center justify-center w-20 h-20 my-10 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full" onClick={stopRecording} disabled={!recording}>
            <img className='micro' src={micro} alt="micro"></img>
            </button>}

            {txResponse && (
                <div>
                    <h3>Respuesta:</h3>
                    <span>{txResponse}</span>
                </div>
            )}
      

        </div>
    )

}

