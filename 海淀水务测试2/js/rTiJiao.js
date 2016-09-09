//创建点击撤销调用的闭包函数
function cx(num){
  this.clickFunc = function(){
    //alert(num);
    var mid2=document.getElementById('mid2');
    var bottom=document.getElementById('bottom');
    var pag=document.getElementById('pag');
    var mid3=document.getElementById('mid3');
    mid2.style.display='none';
    bottom.style.display='none';
    pag.style.display='none';
    mid3.style.display='none';
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
             for(var j=0;j<3;j++){  //给每个tr循环创建3个td元素
                    var td=document.createElement('td');
                    td.id='td'+i+j;
                    tr.appendChild(td);
                    // var div=document.createElement('div'); //创建div元素
                    //     div.className='td-num';                          
                    // td.appendChild(div); //给td添加div元素
            }
    }
  //模拟从服务器获得数据
    var neirong = new Array('巡查东面小河','会议室开会','外出考察')
     
       for(i=0;i<6;i++){     //根据tr的id显示颜色
           var trs=document.getElementById('tr'+i);
           if(i%2==0){
           	  trs.className='tr-white'; 
           }
           else{
           	  trs.className='tr-blue';
           }  
       }

       for(var i=0;i<neirong.length;i++){  //把数据赋值到td中
       	   var tds=document.getElementById('td'+i+0);            
               tds.innerHTML=i+1; 
           for(var j=0;j<2;j++){
       	   	  var tds=document.getElementById('td'+i+1);    	   	  
       	   	   tds.innerHTML=neirong[i];           
       	   }
     	    var tds=document.getElementById('td'+i+2);
             
          	   var as=document.createElement('a');
             
          	 //  as.innerHTML='详情';
               as.className='td-xiaojia';
          	  // as.href='pXiaoJiaNext'+i+'.html';             
         	tds.appendChild(as);
          var col = new cx(i);//调用回调函数
          as.onclick = col.clickFunc;                    
       }
      
}  