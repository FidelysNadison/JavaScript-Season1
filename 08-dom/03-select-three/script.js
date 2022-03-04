// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {

    // your code here
    let targetItem = document.querySelectorAll('.target');

    targetItem.forEach(function(t) {
        t.innerHTML = 'owned';
    });


})();
