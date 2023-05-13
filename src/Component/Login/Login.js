import React from 'react'
import{useState,useEffect} from 'react'
import {auth ,signInWithGoogle } from "../../Atoms/Input/Firebase/Firebase.js";
import { useNavigate } from 'react-router-dom';
import page from '../../Component/Login/Login.module.css'
import { FcGoogle } from 'react-icons/fc'
import { BsApple } from 'react-icons/bs'
import Input from '../../Atoms/Input/Input.js'
import Button from '../../Atoms/Input/Button/Button.js'
export default function SignIn() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [user, setUser] = useState(null);
 
    let navigate = useNavigate();

  useEffect(() => {
    const unsubscribe1 = auth.onAuthStateChanged((users) => {
      setUser(users);
    });

    return unsubscribe1;
  }, []);

  const signGoogle = () => {
    auth.signOut().then(() => {
      setUser(null);
    });
  };

  function handlesubmit() {
    
    if(user != null && email != null  && password != null){
      alert("welcome ");
      navigate("/AdoptChild");
    }
   
  }
    return (
       
        <div className={page.Container}>
          <div  classname={page.box}>
        <div className={page.leftSection}>
        </div>
        
        <div className={page.rightSection}>
            <div className={page.signin}>
              <h1 className={page.sign}>Sign In</h1>
             <h4 className={page.account}>Sign in to your account</h4>
            </div>
            <div className={page.mainButton}>
            {user === null ? (
            <Button style={{marginRight:'2rem'}}text="Sign in with Google" icon={<FcGoogle />}
             className={page.gbtn} onClick={signInWithGoogle} />
          ) : (
            <Button text="Sign out from Google" icon={<FcGoogle />} className={page.googlebtn} onClick={signGoogle} />
          )}

                <Button text='Sign in with Apple' icon={<BsApple/>} className={page.googlebtn}/>
            </div>
            <div className={page.mainInput}>
                <h4>Email address</h4>
                <Input type="email" placeholder="Email" className={page.input} value={user ? user.email : email}/>
                <h4>Password</h4>
                <Input type="password" placeholder="Password" className={page.input} value={user ? user.refreshToken : password} />
                <h4>Forgot Password</h4>
                <Button onClick={()=> handlesubmit()}text='Sign In'  className={page.submitbtn}/>
                
            </div>
            <div>
                <p>if u want to Adopt child  <a href='/AdoptChild'>Just click</a> </p>
            </div>
            
        </div>
        </div>
        </div>
  )
}
            
