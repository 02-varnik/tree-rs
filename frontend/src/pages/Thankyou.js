import {Link} from "react-router-dom"
function LandingPageButton() {
    return <Link to="/" class="nav-link">
        <button class="btn btn-primary" > 
            <span style={{"font-size": "24px"}}>
                HomePage
            </span>
        </button>
    </Link>
}
function LandingFrameMessage() {
    const style = {
        margin: "auto",
        padding: "5% 35% 10% 15%",
        color: "white"
    }
    return <div style={style}>
        
        <div style={{"font-size": "75px"}}>
            THANKS FOR REACHING OUT
        </div>
        
        <div style={{"font-size": "36px"}}>
            WE WILL CONTACT YOU IN NEXT 24 HOURS VIA CALL
        </div>
        <br />
        <LandingPageButton />
    </div>
}
function LandingFrame() {
    const style = {
        "background-image": `url("images/black.jpg")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "absolute",
        height: "100%",
        width: "100%"
    }
    return <div style={style}>
        <LandingFrameMessage />
    </div>
}
function Thankyou() {
    return <div>
        <LandingFrame />
    </div>
}
export default Thankyou