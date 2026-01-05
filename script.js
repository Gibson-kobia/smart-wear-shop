let cartCount = 0; 

function addToCart() { 
  cartCount++; 
  alert("Cart items: " + cartCount); 
} 

function validateForm() { 
  let email = document.getElementById("email").value; 
  if (!email.includes("@")) { 
    alert("Please enter a valid email address"); 
    return false; 
  } 
  return true; 
} 

let greetingElement = document.getElementById("greeting"); 
if (greetingElement) { 
  let hour = new Date().getHours(); 
  let greeting = "Good evening"; 

  if (hour < 12) greeting = "Good morning"; 
  else if (hour < 18) greeting = "Good afternoon"; 

  greetingElement.innerText = 
    greeting + " | " + new Date().toDateString(); 
} 

function toggleTheme() { 
  document.body.classList.toggle("dark"); 
}