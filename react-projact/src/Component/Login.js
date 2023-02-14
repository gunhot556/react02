import "../allcss/Login.css";
import logos from "./Wordbrand.png";

const Login =()=>{
    return (
        <div>
            <body>
                <div className="card">
                        
                        <div className="app-logo">
                        <div><img src={logos} style={{width:110}}/></div>
                        </div>
                        <div className="login">
                            <p>LOGIN</p> 
                        </div>

                    <form>
                        <div className="input" id="txt">
                            <input type="text" placeholder = "Username"/>
                            <i></i>
                        </div>
                        <div className ="input" id="txt">
                            <input type ="password" placeholder = "Password"/>
                            <i></i>
                        </div>

                        <label>
                            <div className="checkbox">
                                <input type="checkbox" id="box"/> I have read the agreement
                            </div>
                        </label>

                        <div className="Newtosky">
                            <p>New to SKYREF? Register here</p>
                        </div>

                        <div className="containerbutton" id="btn-button">
                            <submid>
                                <button>Login</button>
                            </submid>
                        </div>
                    </form>
                </div>
            </body>
        </div>
    )
}
export default Login