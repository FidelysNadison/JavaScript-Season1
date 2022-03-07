// 09-misc/03-worst-ui-one/script.js - 9.3: worst user interface (1) : phone slider


(() => {

    // your code here
    let number = document.getElementById('slider');

    number.addEventListener('change', () =>{
        let slide = '0' + number.value
        
        document.getElementById('target').innerHTML = slide
    })

})();
