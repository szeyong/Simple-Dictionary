import React from "react";
import { AiFillSound } from "react-icons/ai";
import styles from "./Results.module.css"

const WordPronounce = (props) => {
    function playAudio(e) {
        e.preventDefault();

        const audio = new Audio(props.phonetics.audio);
        audio.play();
    }
    return (
        <div className={styles.Phonetics}>
            <span className={styles.phoneticsText}>{props.phonetics.text}</span>
            <span className={styles.playAudio} onClick={playAudio}><AiFillSound /></span>
        </div>
    );
}
export default WordPronounce;