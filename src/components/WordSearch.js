import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import styles from "./Parent.module.css";

const WordSearch = (props) => {
    const [newInputWord, setNewInputWord] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("onSubmit:"+e);
        console.log("newInputWord:"+newInputWord);
        props.onSearch(newInputWord);
    }

    function handleWordChange(e) {
        setNewInputWord(e.target.value);
    }

    return (
        <React.Fragment>
            <span className={styles.searchForm}>
                <form onSubmit={handleSubmit}>
                    <button type="submit" className={styles.searchIcon}>
                        <FaSearch />
                    </button>
                    <input
                        type="search"
                        className={styles.searchBar}
                        placeholder="Enter a word"
                        autoComplete="off"
                        onChange={handleWordChange}
                    ></input>
                </form>
            </span>
        </React.Fragment>
    )
}

export default WordSearch
