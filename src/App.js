
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Data from "./components/Data";
import React , {useState, useEffect} from "react"
import gdrivelogo from "./glogo.png"
import {auth,provider} from "./firebase"
function App() {
  const [user, setUser] = useState(null);
  const signIn=()=>{
    auth.signInWithPopup(provider).then(({user})=>{
      setUser(user);
    }).catch(error=>{
      alert(error.message);
    })
  }
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("current-user"));
    setUser(user);
 },[])
 useEffect(()=>{
     window.localStorage.setItem("current-user",JSON.stringify(user));
 })
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
          <p className="head">E-Drive - A File Management System</p>
          <button onClick={signIn}>Login to E-Drive</button>
        </div>
      )
  }
  </>
  );

}
export default App;
