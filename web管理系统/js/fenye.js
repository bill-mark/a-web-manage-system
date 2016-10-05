//fenye.js要在调用fenye()的函数所占的js文件前面导入！
//使用方法，AJAX成功后调用执行
  // success:function(data){   
  //              fenye(data);
  //         },

var totalpage,pagesize,cpage,count,curcount,outstr; 
//初始化 
cpage = 1; //当前页数
//totalpage     //总页数在ajax中赋值
pagesize = 5;  //单位页数
outstr = "";

function fenye(data){
                 totalpage =Math.ceil(data.shuju/5)// 得到总页数,shuju为数据条数 
                 //totalpage =8; // 模拟得到总页数,data.shuju为数据条数   
                 setpage();//调用分页函数
                 for(var i=0;i<data.renwu_tijiao.length;i++){  //第一次返回，最多返回6条数据
                         var tds=document.getElementById('td'+i+0);                                      
                             tds.innerHTML=data.renwu_tijiao[i].id; 
                         for(var j=0;j<2;j++){
                            var tds=document.getElementById('td'+i+1);                                        
                             tds.innerHTML=data.renwu_tijiao[i].name;           
                         }
                         var tds=document.getElementById('td'+i+2);                          
                             var as=document.createElement('a');                          
                           //  as.innerHTML='详情';
                             as.className='td-xiaojia';
                            // as.href='pXiaoJiaNext'+i+'.html';             
                            tds.innerHTML='';
                            tds.appendChild(as);
                            var col = new cx(data.renwu_tijiao[i].id);//调用回调函数
                            // alert(num);
                            as.onclick = col.clickFunc;                    
                }
}

function setpage()        //产生分页
{ 
    if(totalpage<=5){        //总页数小于5页 
        for (count=1;count<=totalpage;count++) 
        {    if(count!=cpage) 
            { 
                outstr = outstr + "<a href='javascript:void(0)'  onclick='gotopage("+count+")'>"+count+"</a>"; 
            }else{ 
                outstr = outstr + "<span class='current' >"+count+"</span>"; 
            } 
        } 
    } 
    if(totalpage>5){        //总页数大于5页 
        if(parseInt((cpage-1)/5) == 0) 
        {             
            for (count=1;count<=5;count++) 
            {    if(count!=cpage) 
                { 
                    outstr = outstr + "<a href='javascript:void(0)' class='page-a' onclick='gotopage("+count+")'>"+count+"</a>"; 
                }else{ 
                    outstr = outstr + "<span class='current'>"+count+"</span>"; 
                } 
            } 
            outstr = outstr + "<a href='javascript:void(0)' class='page-a' onclick='gotopage("+count+")'> 下一页 </a>"; 
        } 
        else if(parseInt((cpage-1)/5) == parseInt(totalpage/5)) 
        {     
            outstr = outstr + "<a href='javascript:void(0)' class='page-a' onclick='gotopage("+(parseInt((cpage-1)/5)*5)+")'>上一页</a>"; 
            for (count=parseInt(totalpage/5)*5+1;count<=totalpage;count++) 
            {    if(count!=cpage) 
                { 
                    outstr = outstr + "<a href='javascript:void(0)' class='page-a' onclick='gotopage("+count+")'>"+count+"</a>"; 
                }else{ 
                    outstr = outstr + "<span class='current'>"+count+"</span>"; 
                } 
            } 
        } 
        else 
        {     
            outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+(parseInt((cpage-1)/5)*5)+")'>上一页</a>"; 
            for (count=parseInt((cpage-1)/5)*5+1;count<=parseInt((cpage-1)/5)*5+5;count++) 
            {         
                if(count!=cpage) 
                { 
                    outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+count+")'>"+count+"</a>"; 
                }else{ 
                    outstr = outstr + "<span class='current'>"+count+"</span>"; 
                } 
            } 
            outstr = outstr + "<a href='javascript:void(0)' onclick='gotopage("+count+")'> next </a>"; 
        } 
    }     
    document.getElementById("setpage").innerHTML = "<span id='info'>共"+totalpage+"页|第"+cpage+"页<\/span>" + outstr ; 
    outstr = ""; 
}

function gotopage(target) //跳转页面函数
{     
    cpage = target;        //把页面计数定位到第几页 
    setpage();              //重新生成分页
    //reloadpage(target);    //调用显示页面函数显示第几页,这个功能是用在页面内容用ajax载入的情况 


   $.ajax({
          type:'post',
          url:'',
          dataType:'json',
          data:target,  //向服务器发送选择的页数 target从1开始
          //data为1时，返回第1-5条数据; 为2时，返回第2-10条数据，类推。
          success:function(data){   //data的数据示例为rTiJiao2.json,一次最多返回六条

                 for(var i=0;i<data.length;i++){  
                         var tds=document.getElementById('td'+i+0);                                      
                             tds.innerHTML=data[i].id; 
                         for(var j=0;j<2;j++){
                            var tds=document.getElementById('td'+i+1);                                        
                             tds.innerHTML=data[i].name;           
                         }
                         var tds=document.getElementById('td'+i+2);                          
                             var as=document.createElement('a');                          
                           //  as.innerHTML='详情';
                             as.className='td-xiaojia';
                            // as.href='pXiaoJiaNext'+i+'.html';             
                            tds.innerHTML='';
                            tds.appendChild(as);
                            var col = new cx(data[i].id);//调用回调函数
                            // alert(num);
                            as.onclick = col.clickFunc;                    
                }

          },
          error:function(err){
               alert('err');
          }
       })
   
} 