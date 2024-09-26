import { useState } from 'react'
import './App.css'

const FaqItems = ({ question, answer }) => {

  const [show, setShow] = useState(false);

  const HandleShow = () => {
    setShow(!show);

  }

  return (
    <div className={`faq-items ${show ? "active" : ""}`}>
      <div className="faq-header" onClick={HandleShow}>{question}</div>
      <div className="faq-body">
        <div className="faq-body-content">{answer}</div>
      </div>
    </div>
  )
}
const FaqAccordian = ({ faqData }) => {
  return (
    <div className="faq-accordian">
      <h2>FAQs</h2>
      {faqData.map((item) => (<FaqItems key={item.id} question={item.question} answer={item.answer} />))}
    </div>
  )
}

function App() {

  const faqData = [
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.It allows developers to create large web applications that can update and render efficiently in response to data changes."
    },
    {
      id: 2,
      question: "What is a component in React?",
      answer: "A component in React is an independent, reusable piece of UI that can have its own state and logic. Components can be functional or class-based, and they can be nested within other components to build complex UIs."
    },
    {
      id: 3,
      question: "What are hooks in React?",
      answer: "Hooks are special functions that allow you to use state and other React features in functional components. The most commonly used hooks are useState, useEffect, and useContext."
    },
    {
      id: 4,
      question: "How does the virtual DOM work in React?",
      answer: "The virtual DOM is a lightweight representation of the real DOM in memory. React uses the virtual DOM to track changes in the UI and efficiently update only the parts of the real DOM that need to change, improving performance."
    }
  ];

  return (
    <>
      <div className='app'>
        <FaqAccordian faqData={faqData}/>
      </div>
    </>
  )
}

export default App
