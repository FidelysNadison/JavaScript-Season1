// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    // your code here
    document.getElementById('run').addEventListener('click', () =>{
        let input1 = document.getElementById('pass-one');
        let input2 = document.getElementById('pass-two');
        let passwordOne = input1.value;
        let passewordTwo = input2.value;

         if(passwordOne === passewordTwo){
             input1.style.border = '4px solid green';
             input2.style.border = '4px solid green';
         }
         else{
             input1.style.border = '4px solid red';
             input2.style.border = '4px solid red';
         }
         
 
     })
 
})();
