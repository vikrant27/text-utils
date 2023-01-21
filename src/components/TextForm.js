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
        // let text = document.getElementById('myBox');
        // text.select();
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
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
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder="enter text here" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'#13466e':'white'}}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpperClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleTextClear}>Clear Text</button>
                
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Nothing to preview'}</p>
            </div>
        </>
        
        
    )
}