
function validate() {
    var name = document.forms["myform"]["name"].value;      
    var email=document.forms["myform"]["email"].value;  
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf(".");  
    
    if (name.length < 3){
      alert("Please, Fill out !");
      return false;
    }else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
        alert("Please enter a valid e-mail address \n with @ and \n .com or any other extension:");  
        return false;  
        }else{
        return true;
    }

  }