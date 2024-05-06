import { useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer(){
    setAnswer("generating answer..");
    const response = await axios ({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyB7q1BjnJtHWMf22audzhqiw9FAN9sfufo",
      method: "post",
      data: {
        contents:[{parts:[{ text: question}] }],
    },
    });
  
    setAnswer(
      response["data"]["candidates"][0]["content"]["parts"][0]["text"]
    );
  }

  return (
    <>
    <div className= "w-100"></div>
      <h1 className='bg-orange-300'> TwinTalk AI </h1> 
      <textarea className="border rounded w-full"
      value={question} 
      onChange={(e) => setQuestion(e.target.value)}
      cols ="150" 
      rows ="20"
      placeholder="Ask anything to me!"
      ></textarea>
      <button type = "button" onClick={generateAnswer}> Generate answer</button>
      <p> {answer} </p>
    </>
  );
}

export default App;
