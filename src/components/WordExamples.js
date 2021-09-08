import React from 'react'

const WordExamples = (props) => {
    if (props.examples) {
        return (
            <div className="WordExamples">
                <div className="example">
                    "{props.examples}"
                </div>
            </div>
        )
    } else {
        return null;
    }
}
export default WordExamples
