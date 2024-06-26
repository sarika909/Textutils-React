import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("UpperCase was clicked ");
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
    }

    const handleLowClick=()=>{
        // console.log("Lowercase was clicked ");
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","success")
    }
    
    const handleClearClick=()=>{
        // console.log("Clear was clicked ");
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
    const[text,setText]=useState('');
     
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1 classname="mb-4">{props.heading}</h1>
     <div className="mb-3">
  
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'white',color: props.mode==='dark'?'white':'#042743'}}  id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert To LowerCase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.split(" ").filter((element)=>{return element.length!==0}).length} characters.</p>
        <p>Time needer to read the text: {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>

    </div>
    </>
  )
}
