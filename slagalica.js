var indx  = 0
var signs = ["pik", "karo", "herc", "tref", "zvezda", "skocko"];
var asgm  = ["","","",""];
var sol   = ["","","",""];


	indx  = 0;
	asgm  = ["","","",""];
	sol   = ["","","",""];
	for(var i = 0; i < 4; i++){
	  var x = Math.floor(Math.random() * 6);
	  asgm[i] = signs[x];
	}



function clickMe(el){
  if(indx < 28){
	var sign = el.getAttribute('id');
	var img = './images/'+sign+'.png';
	var e = 'tb'+indx;
	$("#"+e+"").empty();
	sol[indx % 4] = sign;                                       
	var image = document.createElement('img');
	image.src = img;
	image.style =  'height: 4vw; width: 4vw; border-radius:20%;';
	document.getElementById(e).appendChild(image);
	if((indx + 1) % 4 == 0) chSol([...asgm]);	
	indx++;
	}
}
 
function chSol(astmp){
        var succ = false;
        var ind  = indx - 3;
        var red  = 0;
	var yel  = 0;
	var blc  = 4;
	for(var i = 0; i < 4; i++){
		if(astmp[i] == sol[i]){
		   blc -= 1; 		   
		   red += 1;
                  astmp[i] = "";
                  sol[i] = "a";		   
		}		
	}
	for(var i = 0; i < 4; i++){
		if(astmp.includes(sol[i])){
		   astmp[astmp.indexOf(sol[i])] = "";
		   yel += 1;
		   blc -= 1;
		}
	}
	if(red == 4) succ = true;
	setTimeout(function(){
	while(red > 0){
	   var e = document.getElementById('sl'+ind);
	   var image = document.createElement('img');
	   image.src = './images/red.png';
	   image.style =  'height: 3vw; width: 3vw; border-radius:50%;';
	   e.appendChild(image);
	   red -= 1;
	   ind += 1;
	}    
	while(yel > 0){
	   var e = document.getElementById('sl'+ind);
	   var image = document.createElement('img');
	   image.src = './images/yelow.png';
	   image.style =  'height: 3vw; width: 3vw; border-radius:50%;';
	   e.appendChild(image);
	   yel -= 1;
	   ind += 1;
	} 
	while(blc > 0){
	   var e = document.getElementById('sl'+ind);
	   var image = document.createElement('img');
	   image.src = './images/black.png';
	   image.style =  'height: 3vw; width: 3vw; border-radius:50%;';
	   e.appendChild(image);
	   blc -= 1;
	   ind += 1;
	}	
	if(succ || indx > 27) 
	endFunc();
	}, 1000);
}

function endFunc(){
indx = 30;
for(i = 28; i < 32; i++){
   var el = document.getElementById('tb' + i);
   var image = document.createElement('img');
	   image.src = './images/' + asgm[i - 28] + '.png';
	   image.style =  'height: 4vw; width: 4vw; border-radius:20%;';
	   el.appendChild(image);
}
}



