(function () {
'use strict';

console.log('Обработка событий');
 var btnBrush = document.createElement('input'); 
 btnBrush.classList.add('btnBrush');
 btnBrush.setAttribute('value', 'Brush');

 var btnColor = document.createElement('input');
  btnColor.classList.add('btnColor');
  btnColor.setAttribute('type','color');
  

   
   
 var brushSize = document.createElement('input'); 
 brushSize.setAttribute('type', 'range');
  brushSize.classList.add('brushSize');


 var btnErase = document.createElement('input'); 
  btnErase.classList.add('btnErase');
   btnErase.setAttribute('value','Erase');



var elem = document.getElementById('menu'); 
											
		elem.appendChild(btnBrush); 
        elem.appendChild(btnColor); 
        elem.appendChild(brushSize);
        elem.appendChild(btnErase); 


 var canvas = document.createElement('canvas'); 
  canvas.classList.add('canv');

var wrap = document.getElementById('wrapper');
 wrap.appendChild(canvas); 



}()); 