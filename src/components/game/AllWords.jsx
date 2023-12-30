import { useEffect, useState } from "react"

// LocalStorage get words
const memorized = JSON.parse(localStorage.getItem("memorized"))

// new array for random words
const arr = []
for (let i = 0; i < memorized.length; i++) {
  arr.splice((arr.length + 1) * Math.random() | 0, 0, memorized[i])
}

// user score
let score = 0

function AllWords() {
  const [next, setNext] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  let finish = memorized.length

  // new array for random answers
  const newMemorized = arr.filter(w => {
    return arr[next].id !== w.id
  })
  console.log(newMemorized);
  const answers = []
  for (let i = 0; i < 3; i++) {
    answers.splice((answers.length + 1) * Math.random() | 0, 0, newMemorized[i].uzb)
  }
  answers.splice((answers.length + 1) * Math.random() | 0, 0, arr[next].uzb)

  function checkBtn(answer) {
    if(answer === arr[next].uzb) {
      score++
    }
    if(next < memorized.length - 1) {
      setNext(next + 1)
    } else {
      setGameOver(true)
    }
  }

  if(gameOver) {
    return (
      <div>Assasfsadfsddfas</div>
    )
  }

  return (
    <div className="py-8 flex flex-col items-center justify-center container px-4 h-[100%]">

      <h1 className="text-3xl font-bold text-center mb-4">
        {arr[next].eng} so'zining ma'nosi nima ?
      </h1>

      <div className="grid grid-cols-2 gap-2 mb-8 w-full">
        {answers.map((answer, i) => {
          return <button onClick={() => checkBtn(answer)} className="btn btn-outline text-3xl" key={i}>{answer}</button>
        })}
      </div>

      <div className="join">
        {arr.map((word, i) => {
          return (
            <button className={i === next ? "join-item btn" : "join-item btn btn-active"} key={i}>
              {i + 1}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default AllWords