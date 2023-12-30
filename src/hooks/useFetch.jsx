import React, { useEffect, useState } from 'react'

 function useFetch(word) {
    let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
    const [voice, setVoice] = useState("")
    async function getData() {
        try {
            const request = await fetch(url)
            const allData = await request.json()
            allData[0].phonetics.forEach(obj=> {
                if(obj.audio) {
                    setVoice(obj.audio)      
                }
            })
        } catch(error) {
            
        }
    }
    useEffect(()=> {
        getData()
    }, [url])
  return {voice}
}

export {useFetch}