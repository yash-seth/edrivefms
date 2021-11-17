
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Data from "./components/Data";
import React , {useState} from "react"
import gdrivelogo from "./glogo.png"
import {auth,provider} from "./firebase"
function App() {
  const [user, setUser] = useState(null);
  const signIn=()=>{
    auth.signInWithPopup(provider).then(({user})=>{
      setUser(user);
      console.log(user);
    }).catch(error=>{
      alert(error.message);
    })
  }
  return (
    <>
    {
      user ? (
        <>
    <Header photoURL = {user.photoURL} loginState={setUser}/>
    <div className="App">
      <Sidebar loginState={setUser} userData={user}/>
      <Data loginState={setUser} userData={user}/>
    </div>
    </>
    ):(
        <div className="loginwrap">
          <img src={gdrivelogo} alt="img"/>
          <button onClick={signIn}>Login to E-Drive</button>
        </div>
      )
  }
  </>
  );

}
export default App;
