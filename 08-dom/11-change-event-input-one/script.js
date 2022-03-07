// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    // your code here
    document.getElementById('pass-one').addEventListener('keyup', () =>{

        let passwordOne = document.getElementById('pass-one');
        passwordOne.setAttribute('maxlength', '10');
    
        let char = passwordOne.value.length + '/10';
        document.getElementById('counter').innerHTML = char;
    })


})();
