import React, { useState } from 'react';
import axios from "axios";
import WordSearch from "./WordSearch";
import Results from "./Results";
import styles from "./Parent.module.css";

const Parent = () => {
    const [results, setResults] = useState(null);
    const [error, setError] = useState(null);
    // const [wotd, setWotd] = useState(null);

    const refreshWindow = () => {
        window.location.reload();
    }

    function handleWordSearch(word) {
        setResults(null);
        // setWotd(null);
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(handleResponse).catch(handleError);
    }

    function handleResponse(response) {
        setResults(response.data[0]);
        console.log("Result response:"+response);       
    }

    function handleError(error) {
        setError(error)
        console.log("error:"+error);
        // console.log("error data:"+error.response.data);
        // console.log("error status:"+error.response.status);
        // console.log("error header:"+error.response.headers);
    }
    // hello

    return (
        <div className={styles.dictionary}>
            <div className={styles.headerBackground}>
                <div className={styles.appHeader} onClick={refreshWindow}>
                    <h1>Dictionary</h1>
                </div>
                <div className={styles.search}>
                    <WordSearch onSearch={handleWordSearch}/>
                </div>
            </div>
            <div className={styles.resultsSection}>
                <Results results={results} error={error} />
            </div>          
        </div>
    )
}

export default Parent
