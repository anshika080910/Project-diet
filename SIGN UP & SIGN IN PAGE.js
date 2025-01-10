let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

let getButtons = (e) => e.preventDefault()

let changeForm = (e) => {

    switchCtn.classList.add("is-gx");
    setTimeout(function(){
        switchCtn.classList.remove("is-gx");
    }, 1500)

    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
}

let mainF = (e) => {
    for (var i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons );
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm)
}

window.addEventListener("load", mainF);



// firebase auth link 
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import{ getAuth, createUserWithEmailAndPassword, SigninWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js"
import{getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA6YQLBDT67T8V5vDdwEOBLsX8Ex0x6iOE",
    authDomain: "diet-website-f9f9f.firebaseapp.com",
    projectId: "diet-website-f9f9f",
    storageBucket: "diet-website-f9f9f.firebasestorage.app",
    messagingSenderId: "931286420027",
    appId: "1:931286420027:web:19ca3d6e7cd14315e9ea1e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function showMessage(message, divId){
    var messageDiv=document.getElementById(divId)
    messageDiv.style.display='block'
    messageDiv.innerHTML=message
    messageDiv.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },5000);
  }
  const signUp = document.getElementById('submitSignup')
  signUp.addEventListener('click', (event)=>{
    event.preventDefault();
    const email = document.getElementById('email').value
    const password = document.getElementById('pass').value
    const username = document.getElementById('name').value

    const auth = getAuth()
    const db = getFirestore()

    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        const user=userCredential.user
        const userData = {
            email:email,
            username: username     
        };
        showMessage('Account Created Successfully','signupmessage')
        const docref=doc(db, "users", user.uid)
        setDoc(docref,userData)
        .then(()=>{
            window.location,href='signin.html'
        })
        .catch((error)=>{
            console.error("error writing document", error)
        });
    })
    .catch((error)=>{
        const errorCode= error.code;
        if(errorCode=='auth/email-already-in-use'){
            showMessage('Email Address Already Exists !', 'signupmessage')
        }
        else{
            showMessage('unable to create user','signupmessage')
        }
    })
  });