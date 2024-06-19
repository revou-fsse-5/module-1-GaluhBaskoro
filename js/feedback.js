function validateFeedbackForm() {
 var name = document.forms["feedback-form"]["name"].value;
 var email = document.forms["feedback-form"]["email"].value;
 var sugestion = document.forms["feedback-form"]["sugestion"].value;
 var feedback = document.forms["feedback-form"]["feedback"].value;  

 if (name == "" || email =="") {
  alert("Please fill name & email");
  return false;
 } 
 
 if(sugestion ==""){
  alert("Please fill the sugestion");
  return false;
 }

 if (feedback ==""){
  alert("Please choose your feedback");
  return false;
 }else{
  alert(
   "Hello " +
    name +
    " Your advice has been proceed. Thank you for time to give me the feedback."
  );
  return true;
 }
}