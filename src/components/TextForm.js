import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("UpperCase was clicked ");
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
    }

    const handleLowClick=()=>{
        console.log("Lowercase was clicked ");
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","success")
    }
    
    const handleClearClick=()=>{
        console.log("Clear was clicked ");
        let newText= ('');
        setText(newText);
        props.showAlert("Text Cleared","success")
    }

    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+ /);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed ","success")
    }

    const handleOnChange=(event)=>{
        // console.log("on change ");
        setText(event.target.value);
    }
    const[text,setText]=useState('Enter text here');
     
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
     <div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}}  id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To LowerCase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters.</p>
        <p>Time needer to read the text: {0.008 * text.split(" ").length} minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>

    </div>
    </>
  )
}
