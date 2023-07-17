import React from 'react'
import './App.css'
import Intro from './components/Intro'
import Questions from './components/Questions'
import Answers from './components/Answers'

function App() {

  const [page, setPage] = React.useState("")
  const [qa, setQa] = React.useState({})

  function renderPage() {
    switch (page) {
      case "Intro":
        return <Intro changePage={setPage} />
      case "Questions":
        return <Questions
          changePage={setPage}
          fillQa={fillQa} />
      case "Answers":
        return <Answers
          qa={qa}
          changePage={setPage}
        />
      default:
        return <Intro changePage={setPage} />
    }
  }

  // fillQa(default questions {The response}, random questions, Answers {selected answers})

  function fillQa(questions, randomQuestions, answers) {
    const obj = {
      questions: questions,
      randomQuestions: randomQuestions,
      answers: answers
    }
    setQa(obj)
  }

  return (
    <>
      {renderPage()}
    </>
  )
}

export default App
