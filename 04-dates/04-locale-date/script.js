
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satuary', 'Sunday'];
    const months =['January', 'february', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const date = new Date();
    let day = date.getDay();
    let d = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();

    document.getElementById('target').innerHTML = days[day] + ' ' + d + ' ' + months[month] + ' ' + year + ', ' + hour + 'h' + minutes;
    
})();
