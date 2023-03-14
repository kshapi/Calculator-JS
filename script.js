const span = document.querySelectorAll('span');
const screen = document.querySelector('.screen');

span.forEach(span => {
  span.addEventListener('click',
     ()=> {
       culc(span.innerText);
  });
});

let screenValues = [''];

function culc (btn) {
  if (screen.innerText.length >=15){
    screen.innerText = '';
  };
  
  const last = screenValues[screenValues.length -1];
  
  if (!isNaN(btn)) {
    screen.innerText += btn;
    screenValues.push(btn);
  }else {
    //you can use if else also
    //switch case is cleaner than if else 
    switch(btn) {
      case '=':
        screen.innerText = eval(screen.innerText);
        if (screen.innerText == 'undefined'){
          screen.innerText = '';
        }
        break;
      
      case 'AC':
        screen.innerText = '';
        break;
      
      case 'D':
        screen.innerText = screen.innerText.slice(0, -1);
        break;
    };
    
    /*check if the last value of screen is a oprator then do not add another oprator*/
    if (last !== btn &&
        btn !== '=' && 
        btn !== 'AC' &&
        btn !== 'D' ) {
          
        if (btn == 'x') {
          
          if (last == '-' ||
            last == '+' ||
            last == '/' ||
            last == 'x') {
         /*
         if a oprator already add on screen then replace that oprator and add new one
         */
         screen.innerText = screen.innerText.slice(0, -1);
         screen.innerText += '*';
          }else {
            screen.innerText += '*';
          }
            
        }else {
          
          if (last == '-' ||
              last == '+' || 
              last == '/' || 
              last == 'x') {
         /*
         if a oprator already add on screen then replace thet oprator and add new one
         */
         screen.innerText = screen.innerText.slice(0, -1);
         screen.innerText += btn;
          }else {
            screen.innerText += btn;
          };
            
        };
        
        
    };
    
    screenValues.push(btn);
    
  };

}

//kshapi