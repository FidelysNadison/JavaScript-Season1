
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Keller programmer');

    // YOUR CODE HERE
})();
let  age  =  prompt('How old are you ?');
let  sexe =  prompt('Sexe?');
let city  =  prompt('Which city do you live in?');
let result = confirm('you have ' + age + ' years old  and you are ' + sexe + 'and you live in '+ city)

while (result === false){
    let  age  =  prompt('How old are you ?');
let  sexe =  prompt('Sexe?');
let city  =  prompt('Which city do you live in?');
let result = confirm('you have ' + age + ' years old  and you are ' + sexe + 'and you live in '+ city)
}