
 const loginButton = document.querySelector('.login-button');

 const errorMessage = document.querySelector('.error-message');
 
 loginButton.addEventListener('mouseover', () => {
 
   if (document.querySelector('.login-input[placeholder="Username"]').value === '' || 
   document.querySelector('.login-input[placeholder="Password"]').value === '') {
    
     errorMessage.textContent = 'Please enter your username and password.';

     loginButton.style.transform = 'translateX(200px)';
     
    
     loginButton.classList.remove("login-button-complete");
     loginButton.classList.add("login-button");
     loginButton.textContent='Login';
    
   } 
 });

 loginButton.addEventListener('mouseout', () => {
  loginButton.style.transform = 'none';
  errorMessage.textContent="";
});

loginButton.addEventListener('click',()=>
{
  if (document.querySelector('.login-input[placeholder="Username"]').value === '' || 
  document.querySelector('.login-input[placeholder="Password"]').value === '') {

    errorMessage.textContent = 'Please enter your username and password.';

    loginButton.style.transform = 'translateX(200px)';
  
    
  }
  else
  {
    loginButton.classList.remove("login-button");
    loginButton.classList.add("login-button-complete");
    loginButton.textContent="Complete";
    
   
    
  }
})