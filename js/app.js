
function validation(){

   var email='me@mailinator.com';
   var password='test-P1assword';
   var hasUpper = password.match(/[A-Z]/)
   var hasLower = password.match(/[a-z]/g)
   var hasNumber = password.match(/[0-9]/g)

   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   var isValidEmail = re.test(email);

   if (isValidEmail && hasUpper && hasLower && hasNumber) {
       alert("Valid Email Address and Password");
       return true;
   }
    else { 
       alert("Not a valid e-mail address or password");
       return false;
   }
}
function change_page(){
  window.location.href = "index2.html";
} 

function processform()
{
   var parameters = location.search.subtring(1).split("&");
   var temp = parameters[0].split("=");
   l = unescape(temp[1]);
   document.getelementById("data").innerHTML=l;
}