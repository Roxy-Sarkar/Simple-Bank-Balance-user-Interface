document.getElementById('btn-submit').addEventListener('click',function(){
     const emailfield=document.getElementById('user-email');
     const passwordfield=document.getElementById('user-password');
     if(emailfield.value===""&&passwordfield.value===""){
      window.location.href="financial_status.html";
        
     }
     else{
        alert("Please Enter Your Valid Information");
     }
     



}) 
