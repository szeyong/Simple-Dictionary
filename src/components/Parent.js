import React, { useState } from 'react';
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import Results from "./Results";
import styles from "./Parent.module.css";

const Parent = () => {
    const [word, setWord] = useState("");
    const [results, setResults] = useState(null);

    function searchWord() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(e) {
        e.preventDefault();
        searchWord();
    }

    function handleWordChange(e) {
        setWord(e.target.value);
    }

    function handleResponse(response) {
        setResults(response.data[0]);
      }

    return (
        <div className={styles.dictionary}>
            <div className={styles.headerBackground}>
                <div className={styles.appHeader}>
                    <h1>Dictionary</h1>
                </div>
                <div className={styles.search}>
                    <span className={styles.searchForm}>
                        <form onSubmit={handleSubmit}>
                            <button type="submit" className={styles.searchIcon}>
                                <FaSearch />
                            </button>
                            <input
                                type="search"
                                className={styles.searchBar}
                                placeholder="Enter a word"
                                autocomplete="off"
                                onChange={handleWordChange}
                            ></input>
                        </form>
                    </span>
                </div>
            </div>
            <div className={styles.resultsBody}>
                <Results results={results}/>
            </div>          
        </div>
    )
}

export default Parent
