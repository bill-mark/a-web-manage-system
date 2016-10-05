// function queren(){
// 	var data = {
// 		nowtime : $('#time').val(),
// 		beizhu: $('#beizhu').val()
// 	}; 
// 	$.ajax({
// 		type: 'post',
// 		dataType: 'json',
// 		url:'',
// 		data: data
// 		success: function(data, reqtext, res){
// 			alert('success');
// 		},
// 		error(data, reqtext, res){
// 			alert("error");
// 		}
// 	});
 $('.dates').datetimepicker({
             minView:'1',//0为精确到分钟 1为小时
             format: 'yyyy-mm-dd hh',
             weekStart:'1',  //从周一开始
             autoclose:'1', //选完之后关闭
             todayBtn:'true',//将视图转到当天的日期
             todayHighlight: '1',// 高亮当前日期            
             language: 'zh-CN' ,
        });

        // var cc=document.getElementById('ddc');
        // cc.onclick=function(){
        // var ce=document.getElementById('datetimepicker');
        // alert(ce.value)
       //}