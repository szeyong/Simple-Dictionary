import React, { useState, useEffect } from 'react';
import axios from "axios";
import styles from "./Results.module.css";

const WordOfTheDay = () => {
    const [theWord, setTheWord] = useState(null);

    useEffect (() => {
        let wotdUrl = `https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=`
        axios.get(wotdUrl).then(displayWotd)
    
        async function displayWotd(response) {
            console.log("Response Data: ",response.data)
            const wotdData = response.data;
            // const theWord = wotdData.word;
            // const wotdDefinition = wotdData.definitions[0].text;
            console.log("wotdData:", wotdData);
            console.log("The Word:", wotdData.word);
            console.log("Definition:", wotdData.definitions[0].text);
    
            await setTheWord(wotdData);
        }    
    },[]);
    // console.log("theWord:"+ theWord);
    return (
        <blockquote className={styles.wotdContainer}>
            <div className={styles.wotdTitle}>Word of the Day</div>
            <div className={styles.theWord}>{theWord?.word}</div>
            <div className={styles.wotdPOS}>{theWord?.definitions[0].partOfSpeech}</div>          
            <div className={styles.wotdDef}>{theWord?.definitions[0].text}</div>          
            <div className={styles.wotdExample}>"{theWord?.examples[0].text}"</div>          
        </blockquote>
    )
}

export default WordOfTheDay
