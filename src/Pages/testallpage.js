import React from "react";



function testallpage() {
    return(
        <div style={{marginLeft: "300px", marginTop: "-100vh",display: "flex",justifyContent: "center"}}>
            <div className='testallpage' style={{marginTop: "50px", height: "200px"}}>
                <div className={"testall"}>Test all</div>
                <div className={"testText"} style={{padding: "20px 0"}}>
                    By confirming test all function, all functions of the port connected to your computer will be tested.
                    Test will take several minutes.
                    IF you are ready, press button "test" to start.
                </div>
                <div className={"buttons"}>
                    <button className={"testButton"}>test</button>
                    <button className={"reviewButton"}>review</button>
                </div>
            </div>
        </div>
    )
}
export default testallpage();