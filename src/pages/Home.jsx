import Signup from "../components/Signup"
import Homeleftimage from "../assets/Images/homeLeftPic.png"

const Home = () => {
    return (
        <div style={{
            display: 'flex',
            width: "1728px",
            height: "1117px"
        }} >
            <div style={{
                background: "cyan",
                height: "1118px",
                width: "845px",
                position: "relative"  
            }}>

                <img src={Homeleftimage}
                    alt="My Image"
                    style={{
                        height: "100%",
                        width: "100%",
                    }} />

                <div style={{
                    position: "absolute",
                    height:"143px",
                    width:"695px",
                    top: "853px",
                    left: "62px",
                    
                }} >
                    <span style={{
                        fontFamily:"Roboto",
                        fontSize:"55px",
                        fontWeight:"900",
                        color:"#FFFFFF",
                        lineHeight:"77.93px",
                        letterSpacing:"0.02em",
                    }}>
                        Discover new things on Superapp
                    </span>
                </div>
            </div>

            <div style={{
                height: "1118px",
                width: "883px",
            }}
            >
                <Signup />
            </div>
        </div>
    )
}

export default Home