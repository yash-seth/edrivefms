
import Header from "../Header";
import Sidebar from "../Sidebar";
import Data from "../Data";
import React , {useState} from "react"
import gdrivelogo from "../glogo.png"
import {auth,provider} from "../firebase"
function App() {
  const [user, setUser] = useState(null);
  const signIn=()=>{
    auth.signInWithPopup(provider).then(({user})=>{
      setUser(user);
    }).catch(error=>{
      alert(error.message);
    })
  }
  return (
    <>
    {
      user ? (
        <>
    <Header photoURL = {user.photoURL}/>
    <div className="App">
      <Sidebar/>
      <Data/>
    </div>
    </>
    ):(
        <div className="loginwrap">
          <img src={gdrivelogo}/>
          <button onClick={signIn}>Login to E-Drive</button>
        </div>
      )
  }
  </>
  );
}
export default App;
