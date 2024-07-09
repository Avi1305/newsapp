import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [UpperText,setUpperText] = useState("");
    // const [CopyText,setCopyText] = useState("");
    const handleUpClick = () =>{
        // console.log("UpperCase was Clicked" + text);
        let newText = text.toUpperCase();
        setUpperText(newText);
        props.showalert("Converted to UpperCase","success")
    };
    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select(); 
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showalert("Copied to Clipboard!", "success");
    }
    const handleLoClick = () =>{
        // console.log("UpperCase was Clicked" + text);
        let newText = text.toLowerCase();
        setUpperText(newText);
        props.showalert("Converted to LowerCase","success")
    };
    const handleOnChange = (event) =>{
        // console.log("OnChange")
        setText(event.target.value);
    };
    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showalert("Text Cleared!", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showalert("Extra spaces removed!", "success");
    }


    return (
        <> 
            <div className="mb-3"  style={{color:props.mode==="light"?"black":"white" }}>
                <h1>{props.heading} </h1>
                <textarea className="form-control" onChange={handleOnChange} value = {text} style={{backgroundColor:props.mode==="light"?"white":"#13466e",color:props.mode==="light"?"black":"white" }} id="myBox" rows="8"></textarea>
                <button disabled={text.length===0} onClick={handleUpClick} className="btn btn-primary my-3 mx-2 my-1">Convert to Uppercase</button>
                <button disabled={text.length===0}  onClick={handleLoClick} className="btn btn-primary my-3 mx-2 my-1">Convert to Lowercase</button>
                <button disabled={text.length===0}  onClick={handleCopy} className="btn btn-primary my-3 mx-2 my-1">Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>

                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>
            <div className="container" style={{color:props.mode==="light"?"black":"white" }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{ 0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
                <h2>Preview</h2>
                {/* <p>{UpperText}</p> */}
                <p>{UpperText.length>0?UpperText:"Nothing to Preview"}</p>
            </div>
        </>
    )
}
