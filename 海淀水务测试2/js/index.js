window.onload=function(){
    function setheight() {
        var sidebar=document.getElementById('navUl');
        var sidebar2=document.getElementById('iframe');
        var sidebar3=document.getElementById('left');
        sidebar2.style.height=document.documentElement.clientHeight+141+'px';           
        sidebar.style.height=document.documentElement.clientHeight+'px';      
    }
    setheight();   
    } 
    //菜单js
function showmenu(id) {
    var list = document.getElementById("list"+id);
    var menu = document.getElementById("menu"+id);
    switch(list.style.display){  //switch相对快些
        case 'none':
             document.getElementById("list"+id).style.display="block";
             menu.className="out-li2";
             break;
        case 'block':
             document.getElementById("list"+id).style.display="none";
             menu.className="out-li1"; 
             break;     
    }
 }  
//执法队伍管理专用菜单
function showmenu2(id) {
    var list2 = document.getElementById("list"+id);
    var menu2 = document.getElementById("menu"+id)
    if (list2.style.display=="none") {
        document.getElementById("list"+id).style.display="block";
        menu2.className="out-li4"
    }else {
        document.getElementById("list"+id).style.display="none";
        menu2.className="out-li3"
    }
}
//点击切换右侧页面
function changeweb(obj,id){
         obj.className="in-li2"; //更换点击后背景色
         var iframe = document.getElementById('iframe');
         var chg = id+'.html';  //拼接html文件    
         iframe.setAttribute("src",chg); //设置对象的属性        
}