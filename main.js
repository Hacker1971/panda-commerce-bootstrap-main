 const h2Element = document.querySelectorAll('h2');
 for(let i=0; i<h2Element.length; i++){
    h2Element[i].style.color= 'lightblue';

 }

 const backpack = document.getElementById('backpack');
 backpack.style.background = 'tomato';
  
 const cards =document.getElementsByClassName('card');
 for(let i=0; i<cards.length; i++){
    cards[i].style.borderRadius = '30px';

 }

function disableButton() {
  document.getElementById("buy-now-button").disabled = true;
}
function disableButton2() {
  document.getElementById("buy-now-button-2").disabled = true;
}

// let emailField = document.getElementById('email-field');

// let submitButton = document.getElementById('submit-button');
 
// submitButton.disabled = true;

// emailField.addEventListener("input",function(){
//     if(emailField.ariaValueMax.includes('@')){
//         submitButton.disabled = false;
//     }else{
//         submitButton.disabled = true;
//     }
// })
let emailField = document.getElementById('email-field');

let submitButton = document.getElementById('submit-button');
 
submitButton.disabled = true;

emailField.addEventListener("input", function() {
    if (emailField.value.includes('email')) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
});

 const image = document.getElementById('your-image-id');

 image.addEventListener('mouseenter',function(){
    image.style.filter= "brightness(50%)";
 })
 image.addEventListener('mouseleave',function(){
    image.style.filter= "brightness(100%)";
 });



 const image1 = document.getElementById('your-image-id2');

 image1.addEventListener('mouseenter',function(){
    image1.style.filter= "brightness(50%)";
 })
 image1.addEventListener('mouseleave',function(){
    image1.style.filter= "brightness(100%)";
 });

  const subscribe= document.getElementById('subscribe');
  subscribe.addEventListener("dblclick",function(){
    subscribe.style.backgroundColor= "green"
  });




  
