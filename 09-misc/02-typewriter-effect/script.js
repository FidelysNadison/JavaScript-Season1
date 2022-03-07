// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    // your code here
    let text = document.getElementById('target');
    let txt = target.innerText;
    text.innerText = '';
    let i = 0;
    let speed = 20;

    function typeWritter(){
        if(i < txt.length){
            speed = Math.floor(Math.random() *100 );
            target.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWritter, speed);
        }
    };

    typeWritter();


})();
