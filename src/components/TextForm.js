import React, {useState}from "react";

export default function TextForm(props){

    const handleUpperClick = function(){
        //console.log('you have clicked uppercase');
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text has been uppercase","success");
    }

    const handleLowerClick = () => {
        //console.log('you have clicked lowercase');
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text has been lowercase","success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed","success");
    }

    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!","success");
    }

    const handleTextClear = () =>{
        setText('');
        props.showAlert('Text Cleared','success');
    }
    

    const [text, setText] = useState('');
   
    return(
        <>
          
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder="enter text here" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'grey':'white'}}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpperClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1" onClick={handleTextClear}>Clear Text</button>
                
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter Something to preview text'}</p>
            </div>
        </>
        
        
    )
}