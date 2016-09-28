function chakan(id){
  var src1 = document.getElementById(id);
  var cc=src1.getAttribute("src")
  var src2 = document.getElementById("rimg2");
  var src3 = document.getElementById("rimg3");
  var src4 = document.getElementById("rimg4");
  var src5 = document.getElementById("rimg5");
  src2.setAttribute("src",cc);
  src3.style.display="block";
  src2.style.display="block";
  src4.style.display="block";
  src5.style.display="block";
}
var rot=0;
function changImg(){     //忘了这个函数干嘛的了,好像是旋转图片
  var src2 = document.getElementById("rimg2");
  rot +=1;
  src2.className="rImg2-"+rot;
  if(rot==3){
  	rot=-1;
  }
}
function guanBi(){
	var gb2=document.getElementById('rimg4');
	gb2.onclick=function(){
		var src2 = document.getElementById("rimg2");
    var src3 = document.getElementById("rimg3");
		var src4 = document.getElementById("rimg4");
		var src5 = document.getElementById("rimg5");
		src3.style.display="none";
    src2.style.display="none";
    src4.style.display="none";
    src5.style.display="none";
	}
}
 
var e=0;//在滚动函数外部声明e，每次点击右边按钮+1
function gundong(id){
  //本地模拟服务器数据
  var tp=["img/renWuImg/12.jpg","img/renWuImg/5.jpg","img/renWuImg/6.jpg","img/renWuImg/15.jpg","img/renWuImg/16.jpg","img/renWuImg/21.jpg","img/renWuImg/22.jpg","img/renWuImg/23.jpg","img/renWuImg/24.jpg","img/renWuImg/25.jpg"]
//困难的地方在于数组顺序无法快速对应
//螺旋

  var c=tp.length;//获得服务器传来的数组长度
  var i=Math.ceil(c/5);//向上取整
  var p=c-((i-1)*5); //p作为最后一组数组的二维上限
  var m=0;
    var pho = new Array(); //声明二维数组
      for (var k = 0; k<i; k++) {
                pho[k]=new Array();                                        
                        for(var j=0;j<5;j++){ //考虑最后一组的话要j<p
                           pho[k][j]=tp[m];  //一维数组循环赋给二维
                           m=m+1;                       
                        }                                    
      }        
    var src1 = document.getElementById("rimg01");
    var src2 = document.getElementById("rimg02");
    var src3 = document.getElementById("rimg03");
    var src4 = document.getElementById("rimg04");
    var src5 = document.getElementById("rimg05");  

    if( id == "-"){ //开头已经声明e=0;  往左滚动
      e --;
    }
    if(id == "+"){ //往右滚动
      e ++;  
    }
    if(e>=i){  
      alert('没有了') 
    }
    //e=e;
    src1.setAttribute("src",pho[e][0]);
    src2.setAttribute("src",pho[e][1]);
    src3.setAttribute("src",pho[e][2]);
    src4.setAttribute("src",pho[e][3]);
    src5.setAttribute("src",pho[e][4]);
}

window.onload=function(){
   //模拟从服务器得到任务信息
   var dutyword = new Array('日常','2016-08-12 09','2106-08-25 10','审核通过','北清路','排查污染源');

   var spans=document.getElementById('xinxi02-xianshi').getElementsByTagName('span');
   for(var i=0;i<6;i++){
      spans[i].innerHTML=dutyword[i];
   }

   //模拟从服务器得到图片信息
    var tp=["img/renWuImg/12.jpg","img/renWuImg/5.jpg","img/renWuImg/6.jpg","img/renWuImg/15.jpg","img/renWuImg/16.jpg","img/renWuImg/21.jpg","img/renWuImg/22.jpg","img/renWuImg/23.jpg","img/renWuImg/24.jpg","img/renWuImg/25.jpg"]
    var rImgs=document.getElementsByClassName('rImg');
    for(var i=0;i<5;i++){
      rImgs[i].src=tp[i];
    }

   //模拟从服务器得到视频数组
  var videos=new Array(['0830.mp4','造纸厂排污口巡查','http://www.baidu.com'],['0921.mp4','科技园西侧水渠检查','http://www.baidu.com'],['0922.mp4','清流河水污染治理','http://www.baidu.com'],['0927.html','地下水井排查','http://www.baidu.com']);
                     
    var table=document.getElementById('table2');
    var cc=Math.ceil(videos.length/2); //要创建几个tr
        for(var i=0;i<cc;i++){
          var tr=document.createElement('tr');
          table.appendChild(tr); 
             for(var j=0;j<4;j++){
                var td=document.createElement('td');
                td.className='td1';
                tr.appendChild(td);
             }
         }

         var tds=document.getElementsByTagName('td'); //获得所有td
   
         var j=0;
         for(var i=0;i<videos.length;i++){ 
                  var as=document.createElement('a');
                  as.innerHTML=videos[i][0]; //添加视频名
                  as.href=videos[i][2];        //添加视频链接  
                  as.className='as'  ;
               tds[j].appendChild(as);
               tds[j+1].innerHTML=videos[i][1];//添加视频说明
               j=j+2;
         }
         
 }