function validateContactForm() {
 var name = document.forms["contact-form"]["name"].value;
 var email = document.forms["contact-form"]["email"].value;
 var country = document.forms["contact-form"]["country"].value;
 var message = document.forms["contact-form"]["message"].value;  

 if (name == "" || email =="") {
  alert("Please fill name & email");
  return false;
 } 
 
 if (country == "" || message ==""){
  alert("Please fill country & message");
  return false;
 }else{
  alert(
   "Hello " +
    name +
    " Your message has been proceed, it will take me 1 to 2 business days to reply. Thank you for sending me a message."
  );
 }
}