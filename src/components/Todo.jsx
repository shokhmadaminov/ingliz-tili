import React, { useEffect, useState } from 'react'
import { BsCheckCircleFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { json } from 'react-router-dom'
import { v4 } from "uuid"

function Todo() {
    const storageDictionary = JSON.parse(localStorage.getItem("dictionary"))
    const storageMemorized = JSON.parse(localStorage.getItem("memorized"))
    const [dictionary, setDictionary] = useState(storageDictionary ? storageDictionary : [])
    const [memorized, setMemorized] = useState(storageMemorized ? storageMemorized : [])
    console.log(dictionary);
    const [word, setWord] = useState({
        uzb: "",
        eng: "",
        id: v4()
    })
    function addDictionary(e) {
        e.preventDefault()
    }
    function pushStorage() {
        localStorage.setItem("dictionary", JSON.stringify(dictionary))
        localStorage.setItem("memorized", JSON.stringify(memorized))
    }
    pushStorage()
    function deleteFunction(id, el) {
        el(dictionary=> {
            return dictionary.filter(w=> {
                return w.id !== id
            })
        })
        pushStorage()
    }
    function memorizedFunction(id) {
        dictionary.forEach(w=> {
            w.id === id ? memorized.push(w) : ""
        })
        localStorage.setItem("memorized", JSON.stringify(memorized))
        deleteFunction(id, setDictionary)
    }
    function returnDictionary(id) {
        memorized.forEach(w=> {
            w.id === id ? dictionary.push(w) : ""
        })
        pushStorage()
        setMemorized(memorized=> {
            return memorized.filter(w=> {
                return w.id !== id
            })
        })
    }
    return (
        <div className='container grid grid-cols-2 max-md:grid-cols-1'>
            <div className='md:col-span-2 p-4'>
                <h2 className='text-center text-3xl mb-4'>Yangi so'z qo'shish</h2>
                <form onSubmit={addDictionary} className='max-w-[600px] flex flex-col mx-auto'>
                    <label id='engLabel' htmlFor="eng-word">Inglizcha so'z yozing</label>
                    <input onChange={(e) => {
                        setWord((prev) => {
                            return { ...prev, eng: e.target.value }
                        })
                    }} id='eng-word' type="text" placeholder="Apple" className="input input-bordered w-full mb-4" />
                    <label id='uzbLabel' htmlFor="uzb-word">O'zbekcha ma'nosini yozing</label>
                    <input onChange={(e) => {
                        setWord((prev) => {
                            return { ...prev, uzb: e.target.value }
                        })
                    }} id='uzb-word' type="text" placeholder="Olma" className="input input-bordered w-full mb-4" />
                    <button onClick={() => {
                        const uzbWord = document.getElementById("uzb-word")
                        const engWord = document.getElementById("eng-word")
                        const engLabel = document.getElementById("engLabel")
                        const uzbLabel = document.getElementById("uzbLabel")
                        if (uzbWord.value && engWord.value) {
                            setWord((prev) => {
                                return { ...prev, id: v4() }
                            })
                            dictionary.push(word);
                            pushStorage()
                            document.getElementById("eng-word").value = ""
                            document.getElementById("uzb-word").value = ""
                            engLabel.style.color = "inherit"
                            engWord.style.borderColor = "inherit"
                            uzbLabel.style.color = "inherit"
                            uzbWord.style.borderColor = "inherit"
                        } else if (uzbWord.value && !engWord.value) {
                            engLabel.style.color = "red"
                            engWord.style.borderColor = "red"
                        } else if (!uzbWord.value && engWord.value) {
                            uzbLabel.style.color = "red"
                            uzbWord.style.borderColor = "red"
                        }
                    }} className="btn btn-success">Qo'shish</button>
                </form>
            </div>
            <div className='border-2 p-4 max-h-[350px] overflow-y-auto'>
                <h2 className="text-center text-3xl mb-4">Qo'shilgan so'zlar</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <tbody>
                            {dictionary.map((word, index) => {
                                return (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{word.eng}</td>
                                        <td className='text-center'> - </td>
                                        <td>{word.uzb}</td>
                                        <td><button onClick={()=> memorizedFunction(word.id)}><BsCheckCircleFill /></button></td>
                                        <td><button onClick={()=> deleteFunction(word.id, setDictionary)}><RiDeleteBin6Fill /></button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='border-2 p-4 max-h-[350px] overflow-y-auto'>
                <h2 className="text-center text-3xl mb-4">Yodlangan so'zlar</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <tbody>
                            {memorized.map((word, index) => {
                                return (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{word.eng}</td>
                                        <td className='text-center'> - </td>
                                        <td>{word.uzb}</td>
                                        <td>
                                            <button onClick={()=> returnDictionary(word.id)}><GiReturnArrow /></button>
                                        </td>
                                        <td>
                                            <button onClick={()=> deleteFunction(word.id, setMemorized)}><RiDeleteBin6Fill /></button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Todo