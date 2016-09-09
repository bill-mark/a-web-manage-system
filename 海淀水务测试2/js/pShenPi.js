//创建点击撤销调用的闭包函数
function cx(num){
  this.clickFunc = function(){
    //alert(num);
    var mid2=document.getElementById('mid2');
    var bottom=document.getElementById('bottom');
    var pag=document.getElementById('pag');
    mid2.style.display='none';
    bottom.style.display='none';
    pag.style.display='none';
    var xjtext=document.getElementById('xjtext');
    xjtext.style.display='block';
  }
}

window.onload=function (){
	var table =document.getElementById('table-xiaojia');  
 	for(var i=0;i<6;i++){  //循环创建6个tr元素
    	  var tr =document.createElement('tr');
    	  tr.id='tr'+i;  
          table.appendChild(tr);  
             for(var j=0;j<4;j++){  //给每个tr循环创建7个td元素
                    var td=document.createElement('td');
                    td.id='td'+i+j;
                    tr.appendChild(td);
                    // var div=document.createElement('div'); //创建div元素
                    //     div.className='td-num';                          
                    // td.appendChild(div); //给td添加div元素
            }
    }
  //模拟从服务器获得数据
    var neirong = new Array(['家中有事','2016-08-24 10','2016-08-25 18','审批'],['外面有事','2016-09-15 10','2016-09-22 17','审批'])
     
       for(i=0;i<6;i++){     //根据tr的id显示颜色
           var trs=document.getElementById('tr'+i);
           if(i%2==0){
           	  trs.className='tr-white'; 8
           }
           else{
           	  trs.className='tr-blue';
           }
       }

       for(var i=0;i<neirong.length;i++){  //把数据赋值到td中
       	   for(var j=0;j<3;j++){
       	   	  var tds=document.getElementById('td'+i+j);    	   	  
       	   	   tds.innerHTML=neirong[i][j];  
       	   }
       	    var tds=document.getElementById('td'+i+3);
            tds.className='td-xiaojia';//模拟a标签
            	   var as=document.createElement('a');
            	   as.innerHTML='审批';

                 as.className='td-xiaojia';
            	  // as.href='pXiaoJiaNext'+i+'.html';             
           	tds.appendChild(as);  

            var col = new cx(i);//调用回调函数
            as.onclick = col.clickFunc;                    
       }
      
}  