
// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)


(() => {
     // your  code here
     const button =  document.querySelector('#red');
     button.addEventListener('click', function(){
         document.body.style.background = "red";
     });

     const button1 =  document.querySelector('#green');
     button1.addEventListener('click', function(){
         document.body.style.background = "green";
     });

     const button2 =  document.querySelector('#yellow');
     button2.addEventListener('click', function(){
         document.body.style.background = "yellow";
     });

     const button3 =  document.querySelector('#blue');
     button3.addEventListener('click', function(){
         document.body.style.background = "blue";
     });


     
     

    
})();
