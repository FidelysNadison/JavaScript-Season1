
// 03-colors/02-change-bcg-two/script.js - 3.2: Bcg 2

(() => {

    // your code here
    const input = document.getElementById('color');
    document.getElementById('run').addEventListener('click', () =>{
        document.body.style.backgroundColor = input.value;
    })
})();
