import React, { useState } from 'react'

import './Textutils.css'

export default function Textutils(props) {
    const upperCaseText=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        
    }
    const lowercaseText=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const clearText=()=>{
        let newText="";
        setText(newText);
    }
    const textValue=(event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState("")

    

    return (
        <div className={`textarea-container-${props.mode}`}>
            <h1 >{props.heading}</h1>
            <textarea value={text} onChange={textValue} className={`textarea-${props.mode}`} id="textarea"rows="10"></textarea>
            <div className="button">
                <button className="button-item" onClick={upperCaseText}>Convart To Uppercase</button>
                <button className="button-item" onClick={lowercaseText}>Convart To Lowercase</button>
                <button className="button-item" onClick={clearText}>Clear Text</button>
            </div>
            <div className="textsmray">
            <h2>Your text Samary</h2>
            <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} Word and {text.length} characters</p>
            <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} minutes read time</p>
            <h1>Preview</h1>
            <p>{text}</p>
            </div>

        </div>
        // style={{backgroundColor:props.mode==="dark"?'black':'white',color:props.mode==="dark"?'white':'black'}} 
    )
}
