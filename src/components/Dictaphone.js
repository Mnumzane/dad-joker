import React from 'react';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { getRandomJoke, searchForJoke } from '../services/icanhazdadjoke';


const appId = '76fc22f7-600f-4ac6-a8f0-0c6c58c4a8ca';
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

const Dictaphone = (props) => {
    const commands = [
    {
      command: '*RANDOM*',
      callback: () => {
      getRandomJoke()
        .then(
          (response) => {
            props.setData(response.data)
          }).catch(
            (error) => {
              console.log(error)
            })
      },
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.8
        },
        {
      command: ['Tell me a joke about :condition', 'Do you know a joke about :condition'],
        callback: (condition) => {
            console.log("Condition: " + condition)
      searchForJoke(`${condition}`)
        .then(
          (response) => {
            props.setData(response.data)
          }).catch(
            (error) => {
              console.log(error)
            })
      },
    //   isFuzzyMatch: true,
    //   fuzzyMatchingThreshold: 0.5,
    //   bestMatchOnly: true
    },
    {
      command: ['I am :condition', "I'm :condition", 'I feel :condition', 'I am feeling :condition', "I'm feeling :condition"],
      callback: (condition) => props.setJoke(`Hi ${condition}, I'm dad.`),
      matchInterim: true,
      bestMatchOnly: true
    }, 
  ]
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    resetTranscript,
  } = useSpeechRecognition({commands});
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