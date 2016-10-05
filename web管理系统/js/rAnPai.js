var urlvalue='http://192.168.1.121:19032/api/Task/AddTask';//点击主页面确认提交的地址
var url2='http://192.168.1.121:1561/api/UserInfo/GetAllUser';//点击发送至 选择好部门职位请求的地址

window.onload = function(){
	// var gb = document.getElementsByClassName('down-name');
	// for(var i=0;i<gb.length;i++){  //用数组
 //         gb[i].onclick=function(){
 //         	this.parentNode.removeChild(this);
 //         }
	// };    
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
   
  //得到ifream 管理员的id 和名称
  // stpid=parent.window.document.getElementById('tpid').innerText;
   //stpromulgator=parent.window.document.getElementById('tpromulgator').innerText;
 //  alert(stpid+stpromulgator)
};
function tianjia(){  //发送至右边的加号按钮
	var t1 = document.getElementById('tanchuang-wrap');
	var t2 = document.getElementById('tanchuang');
	t1.style.display='block';
	t2.style.display='block';
}
function zhanshi(){   //选择完职位和部门后执行该函数
     document.getElementById('renyuan_liebiao').innerHTML=""; //当用户二次选择时清除原来选择的内容
  	 var bumen=document.getElementById('bumen').value; //获得被选中的value值
     var zhiwei=document.getElementById('zhiwei').value;
  	            if(bumen == null || bumen==''){    //判断是否输入
                       if(zhiwei == null || zhiwei==''){
                                 alert("部门，职位未选择");

                                 return false;
                               }else{
                                alert("部门未选择");
                               document.getElementById("zhiwei").selectedIndex = 0;//重置职位选择
                                return false;
                               }
                }else{
                   if(zhiwei == null || zhiwei==''){
                          alert("职位未选择");
                          return false;
                   }
                }              
        var  choseIds=bumen+zhiwei;  //获得选择的部门和职位ID

        $.ajax({
           type:'get',
           //url:'rAnPaidemo.json',
           url:url2,
           dataType:'json',
           data:choseIds,
           success:function(data){
            // alert(data[0].uid);    
                   //var  html=document.getElementById('renyuan_liebiao').innerHTML;  //保留原有子节点
                    var  html="";    //不保留原有子节点
                    for(var i=0;i<data.length;i++){
                        html = '<span class="label-local"><input id="'+data[i].uid+'"" type="checkbox" name="checkbox1" class="chk">'+data[i].realname+'</span>';
                        document.getElementById('renyuan_liebiao').innerHTML += html;       
                    } ;
           },
           error:function(err){
              alert('获取数据失败');
           }
        });
}

function zhanshi_bumen(){    //当选完部门，职位，又重选部门时执行
    var zhiwei=document.getElementById('zhiwei').value;
    if (zhiwei == null || zhiwei=='') {
      return false;
    }else{
      zhanshi();  //当选完部门，职位，又重选部门时执行
    }
};

document.getElementById('tc_queren').onclick=function(){
  tc_queren();
};
function tc_queren(){   //点击确认执行的获取chexkbox选择值的函数   
    var r=document.getElementsByName("checkbox1"); 
    var html='';
    for(var i=0;i<r.length;i++){
        if(r[i].checked){
           html += '<div class="down-name" ">'+r[i].nextSibling.nodeValue+'<input value="'+r[i].id+'" type="hidden" name="teids">'+'<span class="down-ic"></span></div>';
           //加入input为了能直接用submit向后台提交数据。
           // alert(r[i].id+","+r[i].nextSibling.nodeValue);
        }
    }
    //$('#td3').html(html);  JQ写法
    document.getElementById('td3').innerHTML+=html; //JS写法


          //关闭当前窗口
          var t1 = document.getElementById('tanchuang-wrap');
          var t2 = document.getElementById('tanchuang');
          t1.style.display='none';
          t2.style.display='none';
    
         //点发送至 人名的x关闭对应div。要放在生成它的函数里才能触发。
         var gb = document.getElementsByClassName('down-name');
         for(var i=0;i<gb.length;i++){  //用数组
               gb[i].onclick=function(){
                 this.parentNode.removeChild(this);
               }
        }; 

};

function DateDemo(){   //得到当前日期  
    var d = new Date();  
    var s='';
    s += d.getFullYear()+ "/";
    s += (d.getMonth() + 1) + "/";  
    s += d.getDate();           
    return(s);
}
function zhuanhuan(num){  //把name对象数组转为纯数字数组。
  var dd=document.getElementsByName(num);
  var cc=new Array();
  for(var j=0;j<dd.length;j++){
         cc[j]=dd[j].value;
  }
  return cc;
}
function zhuanhuan2(name){
  var dd=document.getElementsByClassName(name);
  var cc=new Array();
  for(var j=0;j<dd.length;j++){
         cc[j]=dd[j].innerText;
  }
  return cc;
}

function queren(){  //提交任务数据
  var Task={};  //声明传参对象
  Task.ttype=document.getElementById('ttype').value;  //任务类型
  Task.ttitle=document.getElementById('ttitle').value;  //任务标题
  Task.tatime=DateDemo();  //浏览器当前时间
  Task.stime=document.getElementById('stime').value;  //计划开始时间
  Task.etime=document.getElementById('etime').value;  //计划结束时间
  Task.tpid=parent.window.document.getElementById('tpid').innerText; //从iframe获得用户ID
  Task.tpromulgator=parent.window.document.getElementById('tpromulgator').innerText;//从iframe获得用户名
  Task.tsite="海淀区";  
  Task.asddress="海淀区北清路";
  Task.tcontent="巡查河道";
  Task.teids=zhuanhuan('teids');//接收人员id数组
  Task.texecutors=zhuanhuan2('down-name'); //接收人员名称数组
  
                    //另一种获取表单数据的思路
                    //console.log($('#formId').serialize()) 序列化表单数据
                    // data:$('#formId').serialize(),
  $.ajax({
    type:'post',
    dataType:'json',
    data:Task, 
    url:urlvalue,
    success:function(data){
           alert('发送成功');
        window.location.reload();
    },
    error:function(err){
      alert('发送失败')
    }
  })

}