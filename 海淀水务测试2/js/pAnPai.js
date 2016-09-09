window.onload = function(){
	var gb = document.getElementsByClassName('down-name');
	for(var i=0;i<gb.length;i++){  //用数组
         gb[i].onclick=function(){
         	this.parentNode.removeChild(this);
         }
	};
     
    var gb2 = document.getElementById('tc-guanbi'); 
	var t1 = document.getElementById('tanchuang-wrap');
	var t2 = document.getElementById('tanchuang');
	var gb3 = document.getElementById('tc-guanbi2');
     
 		 gb2.onclick = function(){
 		 	t1.style.display='none';
 		    t2.style.display='none';
 		 };         
        gb3.onclick = function(){
 		 	t1.style.display='none';
 		    t2.style.display='none';
 		 }; 
 };

function tianjia(){
	var t1 = document.getElementById('tanchuang-wrap');
	var t2 = document.getElementById('tanchuang');
	t1.style.display='block';
	t2.style.display='block';
}

 



 
