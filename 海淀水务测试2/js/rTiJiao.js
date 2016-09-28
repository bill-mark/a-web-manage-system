//创建点击撤销调用的闭包函数
function cx(num){  //num表示任务序列
  this.clickFunc = function(){  
   // alert(num);
    var mid2=document.getElementById('mid2');
    var bottom=document.getElementById('bottom');
    var pag=document.getElementById('setpage');
    var mid3=document.getElementById('mid3');
    mid2.style.display='none';
    bottom.style.display='none';
    pag.style.display='none';
    mid3.style.display='none';
  
     $.ajax({         //点击查看执行ajax加载
         type:'post',
         url:'demo.json',  //模拟返回的json数据
         dataType:'json',      //预期服务器返回的数据类型
         data:{
             id: num   //发送参数
         },
         success:function(data){      //返回顺序不能变
            var rws=document.getElementsByClassName('rws');
            
            var i=0;
                 for(var key in data){
                     rws[i].innerText=data[key];
                     i+=1;
                 }
         },
         error:function(err){
          alert('fail');
         }
     });

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
      // var duiyuan=document.getElementById("select_duiyuan").value;  
      //           if(riqi == null || riqi==''){    //判断是否输入
      //                  if(duiyuan == null || duiyuan==''){
      //                            alert("日期，队员未选择");
      //                            return false;
      //                          }else{
      //                           alert("日期未选择");
      //                           return false;
      //                          }
      //           }else{
      //              if(duiyuan == null || duiyuan==''){
      //                     alert("队员未选择");
      //                     return false;
      //              }
      //           }
      //     document.getElementById('formId').submit();  //提交数据       

      var riqi= document.getElementById("datetimepicker").value;
      if(riqi == null || riqi==''){    //判断是否输入
            alert('日期未选择');
            return false;
      }
       
       $.ajax({
          type:'post',
          url:'rTiJiao.json',//模拟请求发回的数据
          dataType:'json',
          data:riqi, //发送选择的日期
          success:function(data){   
               fenye(data);   //调用分页函数
          },
          error:function(err){
               alert('err');
          }
       })
 }
                    
}  






 