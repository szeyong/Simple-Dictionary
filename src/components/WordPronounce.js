import React from "react";
import { AiFillSound } from "react-icons/ai";

const WordPronounce = (props) => {
    function playAudio(e) {
        e.preventDefault();

        const audio = new Audio(props.phonetics.audio);
        audio.play();
    }
    return (
        <div className="phonetics">
            <span className="phoneticsText">{props.phonetics.text}</span>
            <span className="playAudio" onClick={playAudio}><AiFillSound /></span>
        </div>
    );
}
export default WordPronounce;