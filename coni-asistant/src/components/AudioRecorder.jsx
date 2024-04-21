import micro from '../assets/micro.png'
import '../styles.css'
import { useState } from 'react'
export function AudioRecorder() {
    const [recording, setRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState(null);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [transcription, setTranscription] = useState('');
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

            recorder.onstop = () => {
                const blob = new Blob(chunks, {type: 'audio/mp3'});
                setAudioBlob(blob);
                handleUpload();
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
          /*setHandle(false)*/
        }
      };

    const handleUpload = async () => {
        if (audioBlob) {
            const formData = new FormData();
            formData.append('audio', audioBlob, 'audio');

            try {
                const response = await fetch('http://127.0.0.1:5000/', {
                    method: 'POST',
                    body: formData,
                });
                if (response.ok) {
                    const transcribed = await response.json();
                    setTranscription(transcribed.text);
                    console.log(transcribed.text);

                    console.log('Upload successful');
                }
                else {
                    console.error('failed upload audio')
                }
            } catch (error) {
                console.error('error uploading audio:', error)
            }
        }
    }


    return (
        <div className='container'>
            {!recording ? (<button className="MicroButtonBlue" onClick={startRecording} disabled={recording}>
                <img className='micro' src={micro} alt="micro"></img>
                </button>
            ) : <button className="MicroButtonRed" onClick={stopRecording} disabled={!recording}>
            <img className='micro' src={micro} alt="micro"></img>
            </button>}

            {transcription && (
                <div>
                    <h3>Transcripción:</h3>
                    <span>{transcription}</span>
                </div>
            )}
      

        </div>
    )

}