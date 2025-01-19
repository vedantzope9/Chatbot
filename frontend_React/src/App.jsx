import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ChatInput from './components/ChatInput'
import ChatResponse from './components/ChatResponse'
import { fetchChatResponse } from './services/api'

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setResponse(null);

    try {
      const apiResponse = await fetchChatResponse(question);
      setResponse(apiResponse);
    } catch (error) {
      alert("Failed to get response");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='App'>

      <nav
        className="navbar"
        style={{
          backgroundColor: "#0d47a1", 
          color: "white",
          padding: "10px 0",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
        }}
      >
        <div
          className="container-fluid d-flex justify-content-center align-items-center"
        >
          <a
            className="navbar-brand text-center"
            href="#"
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: "1.6rem",
              color: "white",
              textTransform: "capitalize",
              letterSpacing: "0.8px",
              textDecoration: "none",
            }}
          >
            <img
              src="src/assets/chatbotImg.png"
              alt="Chatbot Logo"
              width="40"
              height="40"
              style={{ marginBottom: "4px" }}
            />
            &nbsp;<strong>Chatbot</strong>
          </a>
        </div>
      </nav>




      {/*Chat Input */}
      <ChatInput onSubmit={handleQuestionSubmit} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loading && (
          <button className="btn btn-danger" type="button" disabled>
            <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            Loading...
          </button>
        )}
      </div>

      {/* Response*/}
      <ChatResponse response={response} />
    </div>
  )
}

export default App
