// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    // your code here
    let target = document.getElementById('target');
    let button = document.getElementById('increment');
    let value = 0
    
    target.innerHTML = localStorage.getItem('counter');

    button.addEventListener('click', () =>{
        value++;
        target.innerHTML = value;
        localStorage.setItem('counter', value)
    })


})();
