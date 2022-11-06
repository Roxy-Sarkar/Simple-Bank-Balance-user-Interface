document.getElementById('drop-id').addEventListener('click',function(event){
     
     document.getElementById('dropdownDividerButton').innerText=event.target.innerText;
     if(event.target.innerText!="Choose Your Option")document.getElementById('btn-submit').innerText=event.target.innerText
}
)
document.getElementById('btn-submit').addEventListener('click',function(){
     //  the withdrawal part
       if(document.getElementById('btn-submit').innerText=='Withdraw'){
          const withdrawAmount=parseFloat(document.getElementById('input-field').value);
          console.log(document.getElementById('input-field'));
          let currenacc=parseFloat(document.getElementById('current-amount').innerText);
          // validating the withdraw amount
          if(isNaN(withdrawAmount)){
               alert('Please enter a valid withdraw amount');
               return;
          }
          
        // checking whether the requested withdraw amount is less or equal to current balance
           if(withdrawAmount<=currenacc){
               const currwithdraw=parseFloat(document.getElementById('Withdraw-amount').innerText);
               document.getElementById('Withdraw-amount').innerText=currwithdraw+withdrawAmount;
               currenacc=currenacc-withdrawAmount;
               document.getElementById('current-amount').innerText=currenacc;
               document.getElementById('input-field').value="";

            }

            else{
               alert('Please withdraw amount less than or equal to your current balance');
               document.getElementById('input-field').value="";
            }
            
       }
       // the deposit part
    else if(document.getElementById('btn-submit').innerText=='Deposit'){
          
     
          //validating the deposit amount
          if(!isNaN(document.getElementById('input-field').value)&&!document.getElementById('input-field').value==''){
               const depositAmount=parseFloat(document.getElementById('input-field').value);
               const currenacc=parseFloat(document.getElementById('current-amount').innerText);
               document.getElementById('current-amount').innerText=currenacc+depositAmount;

               
               const prvDpst=parseFloat(document.getElementById('Deposit-amount').innerText);
               
                document.getElementById('Deposit-amount').innerText=depositAmount+prvDpst;
                document.getElementById('input-field').value="";
               

          }
          else{
               alert('Please enter a valid amount')
          }
     }
     // validation for not choosing any option
     else{
          alert("Please choose any option 'Withdraw/Deposit'");
     }

})

