import React from 'react';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const appId = '76fc22f7-600f-4ac6-a8f0-0c6c58c4a8ca';
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

const Dictaphone = () => {
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    resetTranscript,
  } = useSpeechRecognition();
    const startListening = () => {
        resetTranscript()
        SpeechRecognition.startListening({ continuous: true })
    };
    const stopListening = () => {
        SpeechRecognition.stopListening();
        // Check for special words we care about in the transcript
        // and respond appropriately.
        // Otherwise - find keywords and use them to perform a search.
    }
    

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button
        // onTouchStart={startListening}
        onClick={listening ? stopListening : startListening}
        // onTouchEnd={stopListening}
        // onMouseUp={stopListening}
          >{listening ? 'Press to Stop': 'Press to Talk'}</button>
      <p>{transcript}</p>
    </div>
  );
};
export default Dictaphone;