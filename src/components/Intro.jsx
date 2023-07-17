import PropsTypes from "prop-types"

export default function Intro({ changePage }) {
  return (
    <section className="intro">
      <h1 className="title">QuizzyTech</h1>
      <p className="description">
        QuizzyTech is an engaging React-based quiz game that tests your knowledge in the field of computer science.
      </p>
      <button
        className="play-btn"
        onClick={() => changePage("Questions")}
      >Start quiz</button>
    </section>
  )
}

Intro.propTypes = {
  changePage: PropsTypes.func
}