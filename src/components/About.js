// import React, { useState } from 'react'

export default function About(props) {
    // const [myStyle, SetmyStyle] = useState({
    //     backgroundColor: "white",
    //     color: "black"
    // })

    let myStyle = {
        color: props.mode === "dark" ? "white" : "black",
        backgroundColor: props.mode === "dark" ? "rgb(24 87 120 / 92%)" : "white",
       
    };
    

    // const [buttonText, setbuttonText] = useState("Enable Dark Mode");

    // const toggleMode = () => {
    //     if (myStyle.backgroundColor === "white") {
    //         SetmyStyle({
    //             backgroundColor: "black",
    //             color: "white",
    //             border: "1px solid white"

    //         });
    //         setbuttonText("Disable Dark Mode");

    //     }
    //     else if (myStyle.backgroundColor === "black") {
    //         SetmyStyle({
    //             backgroundColor: "white",
    //             color: "black"

    //         });
    //         setbuttonText("Enable Dark Mode");
    //     }

    // }

    return (

        <div className='container my-2' style={{color: props.mode === "dark" ? "white" : "black"}}>
            <h1>About-us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <b>Analyze Your text</b>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <p>Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <b>Free to use</b>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <p>TextUtils is a free character counter tool that provides instant character count & word count statistics for a given
                                text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character
                                limit.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <b>Browser Compatible</b>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <p>This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It
                                suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <button type="button" onClick={toggleMode} className="btn btn-outline-primary my-3">{buttonText}</button>
            </div> */}
        </div>
    )
}
