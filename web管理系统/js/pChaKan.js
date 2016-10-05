 function leapYear(year){  //判断是否是闰年,计算每个月的天数
        var isLeap = year%100==0 ? (year%400==0 ? 1 : 0) : (year%4==0 ? 1 : 0);
        return new Array(31,28+isLeap,31,30,31,30,31,31,30,31,30,31);
    }

function firstDay(day){  //获得某月第一天是周几
        return day.getDay();//返回值是 0（周日） 到 6（周六） 之间的一个整
    }
function dateNoneParam(){ //获得当天的相关日期变量
                var day = new Date();// day对象自动使用当前的日期和时间作为其初始值,比如 Wed Jul 27 2016 10:49:15 GMT+0800 (中国标准时间)
                var today = new Array();//定义一维数组
                today['year'] = day.getFullYear();//返回一个表示年份的 4 位数字
                today['month'] = day.getMonth();//返回值是 0（一月） 到 11（十二月） 之间的一个整数。
                today['date'] = day.getDate();//返回月份的某一天,返回值是当前几号 比如今天是7月5号 就返回5
                //today['week'] = day.getDay();//返回值是 0（周日） 到 6（周六） 之间的一个整数
                today['firstDay'] = firstDay(new Date(today['year'],today['month'],1)); //当前月份第一天
                return today;
     }

window.onload=function load(){  //生成当前日期日历
    //放在for(var i=0;i<6;i++){  前面，是为了for(var i=0;i<6;i++) 中的弹窗函数能使用当前日期
    var today=dateNoneParam();  //调用dateNoneParam()  
    var c=today['month'] ;         //获得当日所在月份 数组会少1
    var d=leapYear(today['year']); //获得今年各月天数
    var e=today['year']+'年'+(today['month']+1)+'月';//生成当前日期 年-月 格式
    var dangqian_riqi=document.getElementById('dangqian-riqi'); //
    dangqian_riqi.innerHTML=e;            //显示当前日期

    for(var i=0;i<6;i++){  //循环创建6个tr元素
    	  var table =document.getElementById('table-rili');    	  
    	  var tr =document.createElement('tr');  
          table.appendChild(tr);  
             for(var j=0;j<7;j++){  //给每个tr循环创建7个td元素
                    var td=document.createElement('td');
                    tr.appendChild(td);
                    var div=document.createElement('div'); //创建div元素
                        div.className='td-num';
                        //div.onclick=xinxi_chaxun();  //绑定弹窗函数                            
                    td.appendChild(div); //给td添加div元素
            }
    }
         
    //填充日历
    var k=1;
    k=k-today['firstDay'];   //做差得到1号在第几个格子显示
    var tds = document.querySelectorAll(".td-num");//给日期表格填上数字
         for(var l=0;l<tds.length;l++){
         	tds[l].innerHTML=k++;  //循环赋值 
         }
    var tds2 = document.querySelectorAll(".td-num"); //更新填充后的td
        for(var m=0;m<tds2.length;m++){    //删除多余格子函数
	        	var n=tds2[m].innerHTML;
	        	    if(n<1){
	        	    	tds2[m].style.display='none';
	        	    }else if(n>d[c]){    //d1[c]为本月天数
	        	    	tds2[m].parentNode.style.display='none';
	        	    }              
        }

//模拟从服务器获得二维数组   
//var xinxi = new Array(); 
//var xinxi[18] = new Array;    
//var xinxid[26]= new Array([1,'孙杨','8:00~12:00','福原爱','副队长'],[2,'付慧园','13:00~17:00','福原爱','副队长'],[3,'马龙','18:00~22:00','福原爱','副队长']);
//alert(xinxid[26][26]);

//c[26]
var tds3 = document.querySelectorAll(".td-num"); //更新填充后的td-div
for(var i=0;i<tds3.length;i++){
    tds3[i].onclick=function(){           //弹窗函数
        var e2=today['year']+'年'+(today['month']+1)+'月'+this.innerHTML+'日';//所选日期 年-月-日 格式    
        
        var tw=document.getElementById('tanchuang-wrap'); 
        var tc=document.getElementById('tanchuang');
        var gb = document.getElementById('tc-guanbi');
        tw.style.display='block'; //显示窗口
        tc.style.display='block';
        gb.onclick = function(){  //关闭窗口
            tw.style.display='none';
            tc.style.display='none';
         };
        var tc_riqi=document.getElementById('tc-riqi'); 
        tc_riqi.innerHTML=e2;   

    }
}

     for(var i=2010;i<(today['year']+10);i++){              //查询日期 年份选择
             var selector=document.getElementById('year-selector');
             var option=document.createElement('option')
                 option.innerHTML=i+'年';
                 option.value=i;
             selector.appendChild(option);
    }
    for(var i=1;i<13;i++){              //查询日期 月份选择
             var selector=document.getElementById('month-selector');
             var option=document.createElement('option')
                 option.innerHTML=i+'月';
                 option.value=i;
             selector.appendChild(option);
    }    
}

//window.onload之外的函数
function chaxun(){  //点击查询更改日期  
      var option1=document.getElementById('year-selector'); //年份 select
      var index1 =option1.selectedIndex;//得到被选中索引
      var year = option1.options[index1].value;//获得查询年份
      var option2=document.getElementById('month-selector'); //月份 select
      var index2 =option2.selectedIndex;//得到被选中索引
      var month = option2.options[index2].value;//获得查询月份
      if(year>(year+10)||year<2010){
        if(month>12||month<1){alert('年份，月份选择错误');return}
        else{alert('年份选择错误');return}
      }
      if(month>12||month<1){alert('月份选择错误');return}

      //清除window.onload创建的tr,
      var table=document.getElementById('table-rili');
      var tr=table.getElementsByTagName('tr');
     // alert(tr[2].parentNode);
      for(var i=tr.length;i>1;i--){
        table.removeChild(tr[1]);  //保留表格头
      }

      var c=month-1;//因为月份判断函数从0开始
      var d=leapYear(year);//获得查询年份各月天数
      //alert(d);
      var e=year+'年'+month+'月';//生成当前日期 -年-月 格式
      var e2=document.getElementById('dangqian-riqi'); //
          e2.innerHTML=e;         //显示当前日期
      firstDay=new Date(year,c,1).getDay();  //获得查询月份第一天周几
      //alert(firstDay);
   
      //创建日历框架
      for(var i=0;i<6;i++){  //循环创建6个tr元素
          var table =document.getElementById('table-rili');       
          var tr =document.createElement('tr');  
          table.appendChild(tr);  
             for(var j=0;j<7;j++){  //给每个tr循环创建7个td元素
                    var td=document.createElement('td');
                    tr.appendChild(td);

                    var div=document.createElement('div'); //创建div元素
                        div.className='td-num';
                        div.onclick=function (){  //绑定弹窗函数
                               var tw=document.getElementById('tanchuang-wrap');
                               var tc=document.getElementById('tanchuang');
                               tw.style.display='block';
                               tc.style.display='block';
                        };
                    td.appendChild(div); //把div添加到td中
                 }
        }
 
      //填充日历
        var k=1;
        k=k-firstDay;   //做差得到第一行1号在第几个格子显示
        var tds = document.querySelectorAll(".td-num");//给日期表格填上数字
             for(var l=0;l<tds.length;l++){
                tds[l].innerHTML=k++;  //循环赋值 
             }
        var tds2 = document.querySelectorAll(".td-num"); //遍历填充后的td
            for(var m=0;m<tds2.length;m++){    //删除多余格子函数
                    var n=tds2[m].innerHTML;
                        if(n<1){
                            tds2[m].style.display='none';
                        }else if(n>d[c]){    //d1[c]为本月天数
                            tds2[m].parentNode.style.display='none';
                        }
            }
} 