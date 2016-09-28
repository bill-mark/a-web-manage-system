//创建点击撤销调用的闭包函数
function cx(num){  //num表示任务序列
  this.clickFunc = function(){  
    //alert(num);
    var mid2=document.getElementById('mid2');
    var bottom=document.getElementById('bottom');
    var pag=document.getElementById('setpage');
    mid2.style.display='none';
    bottom.style.display='none';
    pag.style.display='none';
    window.location.href="./rChaKan02.html" //模拟
   // window.location.href='...'+num  //实际  num为任务的id 传给后台  
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
            }
    }
       for(i=0;i<6;i++){     //根据tr的id显示颜色
           var trs=document.getElementById('tr'+i);
           if(i%2==0){
              trs.className='tr-white'; 
           }
           else{
              trs.className='tr-blue';
           }  
       }    
  
  document.getElementById("tijiao_queren").onclick=function(){  //确认按钮执行函数   
        var riqi= document.getElementById("datetimepicker").value; 
        var duiyuan=document.getElementById("select_leixing").value;  
                if(riqi == null || riqi==''){    //判断是否输入
                       if(duiyuan == null || duiyuan==''){
                                 alert("日期，任务类型未选择");
                                 return false;
                               }else{
                                alert("日期未选择");
                                return false;
                               }
                }else{
                   if(duiyuan == null || duiyuan==''){
                          alert("任务类型未选择");
                          return false;
                   }
                }
          
       var choseid=riqi+','+duiyuan;
       $.ajax({
          type:'post',
          url:'rTiJiao.json',//模拟请求发回的数据

          dataType:'json',
          data:'choseid', //发送选择的日期
          success:function(data){   
               fenye(data);   //调用分页函数
          },
          error:function(err){
               alert('err');
          }
       })
 }
                    
}  