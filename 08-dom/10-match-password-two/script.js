// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    // your code here
    document.getElementById('run').addEventListener('click', () =>{
        let input1 = document.getElementById('pass-one');
        let input2 = document.getElementById('pass-two');
        let passwordOne = input1.value;
        let passewordTwo = input2.value;
         
            if(passwordOne === passewordTwo){
                input1.style.border = '3px solid green';
                input2.style.border = '3px solid green';
            }
            else{
                input1.classList.add('error');
                input2.classList.add('error');
            }
     })
 

})();
