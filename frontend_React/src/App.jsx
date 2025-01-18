import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ChatInput from './components/ChatInput'
import ChatResponse from './components/ChatResponse'

function App() {
  const [response, setResponse]= useState(null);
  const [loading, setLoading] = useState(false);


  const handleQuestionSubmit = async(question)=>{
    setLoading(true);
    setResponse(null);

    try{
      //await
    }catch(error){
      alert("Failed to get response");
    } finally{
      setLoading(false);
    }
  }

  return (
    <div className='App'>
      <header className='bg-primary text-white text-center py-4'>
        <h1>ChatBot</h1>
      </header>

      {/*Chat Input */}
      <ChatInput onSubmit={handleQuestionSubmit}/>
      
      {/* Response*/}
      <ChatResponse response={response}/>
    </div>
  )
}

export default App
