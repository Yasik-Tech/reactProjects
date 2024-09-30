
import { useState } from 'react'
import './App.css'

import userIcon from './assets/user.png'
import emailIcon from './assets/email.png'
import passwordIcon from './assets/password.png'

function App() {

  const [action, setAction] = useState("Sign Up");
  const [forgetPass, setForgetPass] = useState(false);

  const handleForgetPass = () => {
    setForgetPass("true");
  }
  const handleBackLogin = () => {
    setAction("Login");
    setForgetPass(false);
  }


  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        {forgetPass ? (
          <div className="inputs">
            <div className="input">
              <img src={emailIcon} alt="email-image" id="email" />
              <input type="text" id="email" placeholder="Enter your email" />
            </div>
            <div className="submit-container">
              <div className="submit" onClick={() => { alert("Link Sended to your email") }}>Send Reset Link</div>
              <div className="submit gray" onClick={handleBackLogin}>Back to Login</div>
            </div>
          </div>
        ) : (
          <div className="inputs">
            {action === "Login" ? <></> : <div className="input">
              <img src={userIcon} alt="user-image" id='user' />
              <input type="text" id='user' placeholder='Name' />
            </div>}
            <div className="input">
              <img src={emailIcon} alt="email-image" id='email' />
              <input type="text" id='email' placeholder='Email' />
            </div>
            <div className="input">
              <img src={passwordIcon} alt="password-image" id='psw' style={{ height: 40, width: 40 }} />
              <input type="text" id='psw' placeholder='Password' />
            </div>
          </div>
        )}
        {!forgetPass && action === "Login" && <div className="forget">Forgot  Password ? <span onClick={handleForgetPass}>Click here !</span></div>}
        {!forgetPass && (
          <div className="submit-container">
            <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign up</div>
            <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login up</div>
          </div>
        )}
      </div>


    </>
  )
}

export default App
