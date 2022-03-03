
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let one = document.getElementById('op-one');
    let two = document.getElementById('op-two');
    let result = 0 ;


    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        result = parseInt(one.value) + parseInt(two.value);
        alert(result);
        
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        result = parseInt(one.value) - parseInt(two.value);
        alert(result);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        result = parseInt(one.value) * parseInt(two.value);
        alert(result);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        result = parseInt(one.value) / parseInt(two.value);
        alert(result);
    });
})();
    
