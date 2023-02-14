import logos from "./wordbrand.svg";
import mable from "./mable.jpg";
import "../allcss/User.css";
const User =()=>{
    return(
        <div>
            <body>
                    <div className="img1">
                        <div><img src={logos}style={{width:100}}/></div>
                    </div>        
                <form>
                    <div className="card1">
                       <div></div> 
                        <div className="img2">
                            <div><img src={mable} style={{width:100}}/></div>
                        </div>
                        
                        <div className="name">
                            <h2>indexnull</h2>
                        </div>

                        <div className="button1">
                            <p1><button id="btn-edit">EDIT PROFILE </button></p1>
                            <div className="fallowers1"><p2>Fallowers</p2></div>
                            <div className="fallowers2"><p2>Fallowing</p2></div>
                        </div>

                    </div>
                    
                        <div className="button2">
                            <p1><button id="btn-models">MODELS</button></p1>
                            <div className="likes"><p2>LIKES</p2></div>
                        </div>
                    
                </form>                
            </body>
        </div>
    )
}
export default User