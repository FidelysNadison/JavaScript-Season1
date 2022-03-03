
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    // your code here
    document.getElementById('run').addEventListener('click', () =>{
        let date = new Date();
        let counter = 0;
        let month;
        let years = document.getElementById('year').value

        for (month = 0; month < 12; month++){
            date.setFullYear(years, month, 13);
            if(date.getDay() === 5){
                
                counter ++;
            }
        }
        alert(counter);

    })
})();
