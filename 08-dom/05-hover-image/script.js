// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    // your code here
    let img = document.querySelector('img');
    img.addEventListener('mouseover', () =>{
        img.setAttribute('src', '../../_shared/img/kiss-wink-heart.svg')
    })

    img.addEventListener('mouseleave', () =>{
        img.setAttribute('src', '../../_shared/img/kiss.svg')
    })

})();
