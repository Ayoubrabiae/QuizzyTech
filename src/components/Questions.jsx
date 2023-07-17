import PropsTypes from "prop-types"
import React from "react"
import he from "he"

export default function Questions({ changePage, fillQa }) {

  const [questions, setQuestions] = React.useState([])
  const [answers, setAnswers] = React.useState([])
  const [randomQuestions, setRandomQuestions] = React.useState()

  React.useEffect(() => {
    async function getQuestions() {
      const response = await fetch(`https://opentdb.com/api.php?amount=5&category=18&type=multiple`)
      const questions = await response.json()
      let quesArr = []
      questions.results.forEach((e) => quesArr.push(e))
      setQuestions(quesArr)
    }
    getQuestions()
  }, [])

  React.useEffect(function randomizeQuestions() {
    const questionsArr = []
    questions.forEach(e => {
      const questionArr = [...e.incorrect_answers]
      const randomNum = Math.floor(Math.random() * e.incorrect_answers.length)
      questionArr.splice(randomNum, 0, e.correct_answer)
      questionsArr.push(questionArr)
    })
    setRandomQuestions(questionsArr)
  }, [questions])

  function addAnswers(index, value) {
    setAnswers(preArr => {
      const newArr = [...preArr]
      newArr[index] = value
      return newArr
    })
  }

  return (
    <section className="questions">
      <div className="container">
        {questions.map((e, index) => (
          <div key={index} className="question-area">
            <h3 className="question" key={index}>{he.decode(e.question)}</h3>
            <ul className="answers">
              {randomQuestions[index] && randomQuestions[index].map((el, i) => (
                <li
                  key={i}
                  onClick={() => addAnswers(index, el)}
                  className={answers[index] == el ? "active" : ""}
                >
                  {he.decode(el)}
                </li>
              ))}
            </ul>
          </div>
        )
        )}
        <button
          className="check-btn"
          onClick={() => {
            changePage("Answers")
            fillQa(questions, randomQuestions, answers)
          }}
        >
          Check answers
        </button>
      </div>
    </section>
  )
}

Questions.propTypes = {
  changePage: PropsTypes.func,
  fillQa: PropsTypes.func
}
