// let navbar = document.querySelector('.header .navbar');
// let menu = document.querySelector('#menu');

// menu.onclick = () =>{
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// };

// window.onscroll = () =>{
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');
// }


$(document).ready(function(){

    $('.buttons').click(function(){

        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if(filter == 'all'){
            $('.diet .box').show(400);
        }
        else{
            $('.diet .box').not('.'+ filter).hide(200);
            $('.diet .box').filter('.'+ filter).show(400);
        }
    })
});

var swiper = new Swiper('.review-slider', {
    loop: true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        640:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 3,
        },
    },
});


// // firebase auth link 
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
// import{ getAuth, createUserWithEmailAndPassword, SigninWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js"
// import{getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js"
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyA6YQLBDT67T8V5vDdwEOBLsX8Ex0x6iOE",
//     authDomain: "diet-website-f9f9f.firebaseapp.com",
//     projectId: "diet-website-f9f9f",
//     storageBucket: "diet-website-f9f9f.firebasestorage.app",
//     messagingSenderId: "931286420027",
//     appId: "1:931286420027:web:19ca3d6e7cd14315e9ea1e"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

//   function showMessage(message, divId){
//     var messageDiv=document.getElementById(divId)
//     messageDiv.style.display='block'
//     messageDiv.innerHTML=message
//     messageDiv.style.opacity=1;
//     setTimeout(function(){
//         messageDiv.style.opacity=0;
//     },5000);
//   }
//   const signUp = document.getElementById('submitSignup')
//   signUp.addEventListener('click', (event)=>{
//     event.preventDefault();
//     const email = document.getElementById('email').value
//     const password = document.getElementById('pass').value
//     const username = document.getElementById('name').value

//     const auth = getAuth()
//     const db = getFirestore()

//     createUserWithEmailAndPassword(auth,email,password)
//     .then((userCredential)=>{
//         const user=userCredential.user
//         const userData = {
//             email:email,
//             username: username     
//         };
//         showMessage('Account Created Successfully','signupmessage')
//         const docref=doc(db, "users", user.uid)
//         setDoc(docref,userData)
//         .then(()=>{
//             window.location,href='signin.html'
//         })
//         .catch((error)=>{
//             console.error("error writing document", error)
//         });
//     })
//     .catch((error)=>{
//         const errorCode= error.code;
//         if(errorCode=='auth/email-already-in-use'){
//             showMessage('Email Address Already Exists !', 'signupmessage')
//         }
//         else{
//             showMessage('unable to create user','signupmessage')
//         }
//     })
//   });