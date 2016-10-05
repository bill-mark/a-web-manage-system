$('.dates').datetimepicker({  //当要两个输入框 输入日历时，给两个输入框加class为dates
             minView:'2',//0为精确到分钟 1为小时 2为天
             format: 'yyyy-mm-dd',
             weekStart:'1',  //从周一开始
             autoclose:'1', //选完之后关闭
             todayBtn:'true',//将视图转到当天的日期
             todayHighlight: '1',// 高亮当前日期            
             language: 'zh-CN' ,
        });
 $('#datetimepicker').datetimepicker({
             minView:'2',//0为精确到分钟 1为小时
             format: 'yyyy-mm-dd',
             weekStart:'1',  //从周一开始
             autoclose:'1', //选完之后关闭
             todayBtn:'true',//将视图转到当天的日期
             todayHighlight: '1',// 高亮当前日期            
             language: 'zh-CN' ,
        });