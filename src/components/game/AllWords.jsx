import { memo, useEffect, useState } from "react"
import { BiSolidExit } from "react-icons/bi";
import { IoReload } from "react-icons/io5";
import { Link } from "react-router-dom";

// LocalStorage get words
const memorized = JSON.parse(localStorage.getItem("memorized")) ?JSON.parse(localStorage.getItem("memorized")) : []

// new array for random words
const arr = []
for (let i = 0; i < memorized.length; i++) {
  arr.splice((arr.length + 1) * Math.random() | 0, 0, memorized[i])
}

// user score
let score = 0

// start allwords component
function AllWords() {
  const [next, setNext] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  let finish = memorized.length

  // new array for random answers
  const newMemorized = arr.filter(w => {
    return arr[next].id !== w.id
  })
  const answers = []
  if(arr.length > 5) {
    for (let i = 0; i < 3; i++) {
      answers.splice((answers.length + 1) * Math.random() | 0, 0, newMemorized[i].uzb)
    }
    answers.splice((answers.length + 1) * Math.random() | 0, 0, arr[next].uzb)
  }

  function checkBtn(answer, e) {
    if (answer === arr[next].uzb) {
      e.target.classList.add('btn-success')
      score++
    } else {
      e.target.classList.add('btn-error')
    }
    if (next < memorized.length - 1) {
      setTimeout(() => {
        e.target.classList.remove('btn-success')
        e.target.classList.remove('btn-error')
        setNext(next + 1)
      }, 1000);
    } else {
      setTimeout(() => {
        setGameOver(true)
      }, 1000);
    }
  }

  if (gameOver) {
    return (
      <div className="flex flex-col items-center justify-center container px-4 h-[100%]">
        <h1 className="text-3xl font-bold text-center mb-4">
          O'yin tugadi
        </h1>
        <h1 className="text-2xl font-bold text-center mb-4">
          Sizga berilgan {memorized.length} ta so'zdan {score} tasini toptingiz.
        </h1>
        <div className="flex gap-4">
          <Link to="/" className="btn btn-primary text-lg">
            <BiSolidExit className="rotate-180 text-xl" />
            chiqish
          </Link>
          <button onClick={()=> location.reload()} className="btn btn-active btn-accent text-lg">
            <IoReload className="text-xl" />
            yana
          </button>
        </div>
      </div>
    )
  }

  if (memorized.length < 5) {
    return (
      <div className="flex flex-col items-center justify-center container px-4 h-[100%]">
        <h1 className="text-2xl font-bold text-center mb-4">
          Kechirasiz siz bu o'yindan foydalanishingiz uchun kamida 5 ta so'zdan iborat yodlangan so'zlar ro'yhati bo'lishi kerak. Hozirda sizda yodlangan so'zlar miqdori {memorized.length} ta
        </h1>
      </div>
    )
  }

  return (
    <div className="py-8 flex flex-col items-center justify-center container px-4 h-[100%]">

      <h1 className="text-3xl font-bold text-center mb-4">
        {arr[next].eng} so'zining ma'nosi nima ?
      </h1>

      <div className="grid grid-cols-2 gap-2 mb-8 w-full">
        {answers.map((answer, i) => {
          return <button onClick={(e) => checkBtn(answer, e)} className="btn  text-3xl" key={i}>{answer}</button>
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