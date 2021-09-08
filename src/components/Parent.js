import React, { useState } from 'react';
import axios from "axios";
import WordSearch from "./WordSearch";
import Results from "./Results";
import styles from "./Parent.module.css";

const Parent = () => {
    const [results, setResults] = useState(null);
    const [error, setError] = useState(null);

    function handleWordSearch(word) {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(handleResponse).catch(handleError);
    }

    function handleResponse(response) {
        setResults(response.data[0]);
        console.log("response:"+response);
    }

    function handleError(error) {
        setError(error)
        console.log("error:"+error);
    }

    return (
        <div className={styles.dictionary}>
            <div className={styles.headerBackground}>
                <div className={styles.appHeader}>
                    <h1>Dictionary</h1>
                </div>
                <div className={styles.search}>
                    <WordSearch onSearch={handleWordSearch}/>
                </div>
            </div>
            <div className={styles.resultsBody}>
                <Results results={results} error={error}/>
            </div>          
        </div>
    )
}

export default Parent
