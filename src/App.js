
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Data from "./components/Data";
import React , {useState, useEffect} from "react"
import gdrivelogo from "./glogo.png"
import {auth,provider} from "./firebase"
function App() {
  const [user, setUser] = useState(null);
  const [searchState, setsearchState] = useState(false);
  const [searchValue,setSearchValue] = useState("");
  const [totalSize,settotalSize] = useState(0);
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
    <Header photoURL = {user.photoURL} loginState={setUser} userData={user} searchState={searchState} setsearchState={setsearchState} searchValue={searchValue} setsearchValue={setSearchValue}/>
    <div className="App">
      <Sidebar loginState={setUser} userData={user} totalSize={totalSize}/>
      <Data loginState={setUser} userData={user} searchState={searchState} setsearchState={setsearchState} searchValue={searchValue} totalSize={totalSize} settotalSize={settotalSize}/>
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
