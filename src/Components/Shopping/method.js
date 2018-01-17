let num=document.querySelectorAll('#shopping .number');
let small=document.querySelectorAll('#shopping .small');
let large=document.querySelectorAll('#shopping .large');
let countbig=num.innerHTML++;
let countsmall=num.innerHTML--;
        for (let i = 0; i < small.length; i++) {
  	
            small[i].onclick = function() {
                
              console.log(i);
            }
        }
        for (let i = 0; i < large.length; i++) {
  	
            large[i].onclick = function() {
                
              console.log(i);
            }
        }