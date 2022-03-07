// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    let i = 1;
    
    document.getElementById('next').addEventListener('click', () =>{
        let img = document.querySelector('img');
        img.setAttribute('src', gallery[i]);
        i++;
        if (i > 5){
            i = 0
        }

    })

})();
