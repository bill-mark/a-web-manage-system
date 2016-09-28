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

//模拟从服务器获得数据
  var name=new Array(['马可可','宋可可','刘可可','赵可可'])
 
  function xianshi(){
  	 var bumen=document.getElementById('bumen').value; //获得被选中的value值
     var zhiwei=document.getElementById('zhiwei').value;
  	 var num=bumen+zhiwei;
  }