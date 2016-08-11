window.onload=function(){
    function setheight() {
        var sidebar=document.getElementById('navUl');
        var sidebar2=document.getElementById('right');
        var sidebar3=document.getElementById('left');
        sidebar2.style.height=document.documentElement.clientHeight+180+'px';
        sidebar.style.height=document.documentElement.clientHeight+'px';
        
    }
    setheight();   
    } 
    //菜单js
function showmenu(id) {
    var list = document.getElementById("list"+id);
    var menu = document.getElementById("menu"+id);
    if (list.style.display=="none") {
        document.getElementById("list"+id).style.display="block";
        menu.className="out-li2"
    }else {
        document.getElementById("list"+id).style.display="none";
        menu.className="out-li1"
    }
//执法队伍管理专用菜单
}
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