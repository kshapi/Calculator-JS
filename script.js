let span = document.querySelectorAll('span');
let screen = document.querySelector('.screen');

span.forEach(function(span){
  span.addEventListener('click',
   function(){
     
     const x = span.innerText;
     
     if (span.innerText == '='){
          screen.innerHTML = eval(screen.innerHTML);
       
        if (screen.innerHTML == 'undefined') {
         screen.innerHTML = '';
        };
     }
     
     else if(span.innerText == 'AC'){
       screen.innerHTML = '';
     }
     
     else if (span.innerText == 'x') {
       screen.innerHTML += '*';
     }
     
     else{
      screen.innerHTML += span.innerText;
     }
     
   });
  
});