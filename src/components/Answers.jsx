import PropTypes from "prop-types"

export default function Answers({ qa, changePage }) {
  let correctAnsewrsCount = 0
  const correctAnsewrs = []
  qa.questions.forEach((e, i) => {
    if (e.correct_answer == qa.answers[i]) ++correctAnsewrsCount
    correctAnsewrs.push(e.correct_answer)
  })

  function decode(text) {
    const htmlElement = document.createElement("div")
    htmlElement.innerHTML = text
    return htmlElement.textContent
  }

  return (
    <section className="questions answers">
      <div className="container">
        {qa.questions.map((e, index) => (
          <div key={index} className="question-area">
            <h3 className="question" key={index}>{decode(e.question)}</h3>
            <ul className="answers">
              {qa.randomQuestions[index].map((el, i) => (
                <li
                  key={i}
                  className={el == correctAnsewrs[index] ? "correct" : el == qa.answers[index] && el !== correctAnsewrs[index] ? "incorrect" : ""}
                >
                  {decode(el)}
                </li>
              ))}
            </ul>
          </div>
        )
        )}
        <div className="bottom-bar">
          <p className="result">
            You scored {correctAnsewrsCount}/5 correct answers
          </p>
          <button
            className="check-btn"
            onClick={() => {
              changePage("Questions")
            }}
          >
            Play again
          </button>
        </div>
      </div>
    </section>

  )
}

Answers.propTypes = {
  qa: PropTypes.object,
  changePage: PropTypes.func
}
