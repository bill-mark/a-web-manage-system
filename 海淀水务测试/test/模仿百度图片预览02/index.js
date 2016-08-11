// JavaScript Document
var oldObj=null,youCanScroll=false,disObj=null;//oldObjÓÃÀ´¼ÇÂ¼Ö®Ç°Ñ¡ÔñµÄdiv,youCanScrollÅÐ¶ÏÊÇ·ñ¿ÉÒÔ´¥·¢¹öÂÖÊÂ¼þ,disObj±íÊ¾ÏÔÊ¾ÇøµÄÍ¼Æ¬¶ÔÏó
<!--ÒÔÏÂËùÓÃµÄ(110+20),110±íÊ¾¹ö¶¯À¸ÀïÃ¿¸ö¶ÔÏóµÄ¸ß¶È,20±íÊ¾ËüÃÇÖ®¼äµÄ¾àÀë,$()º¯Êý»ñÈ¡¶ÔÏó-->
var init=function()//³õÊ¼»¯
{
	$("box").style.width=window.screen.availWidth-30+'px';//Õë¶Ô²»Í¬·Ö±æÂÊ¸Ä±äbox´óÐ¡
	var img=new Image();
	img.src="images/1.jpg";
	display(img);//ÔÚdisÖÐÏÔÊ¾µÚÒ»ÕÅÍ¼Æ¬
}
function cwatch(){
	window.showModalDialog("images/2.jpg", null, "dialogHeight:500px; dialogWidth:600px; resizable:yes"); 
}
function display(o)//µ÷ÕûdisºÐ×ÓÖÐµÄÍ¼Æ¬,Ê¹Æä¾ÓÖÐ
{	
	var op=$("dis");
	if(op.hasChildNodes())//Èç¹ûdisÓÐ×ÓÔªËØ,ÔòÏÈÉ¾³ý
	op.removeChild(op.firstChild);
	op.appendChild(o);
	var oldw=o.width,oldh=o.height;
	if(o.width>op.offsetWidth)//Èç¹ûÍ¼Æ¬¿í¶È´óÓÚdis
	{
	var ow=o.width,oh=o.height;//¼ÇÂ¼µ÷ÕûÖ®Ç°Í¼Æ¬µÄ¿íºÍ¸ß
	o.width=op.offsetWidth-120;
	o.height=o.width*oh/ow;
	//µÈ±ÈÀýËõÐ¡
	}
	if(o.height>op.offsetHeight)//Í¬ÉÏ
	{
	var ow=o.width,oh=o.height;
	o.height=op.offsetHeight-120;
	o.width=o.height*ow/oh;
	}
	$("imgPercent").innerHTML=Math.round(o.width/oldw*100);
	//ÏÔÊ¾Í¼Æ¬°Ù·Ö±È
	$("viewPic").href=o.src;//¸ø"²é¿´Ô­Í¼Ìí¼ÓµØÖ·"
	$("imgFrom").href=o.src;//¸øÍ¼Æ¬À´Ô´Ìí¼ÓµØÖ·
	var str=o.src.replace("http://","");//¶ÔµØÖ·ÉÔ¼Ó´¦Àí
	str=str.substr(0,17);
	var str1=str.substr(str.length-3,str.length-1);
	str=str.replace(str1,"...");
	$("imgFrom").innerHTML=str;
	if(location.href.substr(0,4)=="http")//ÅÐ¶ÏÊÇ·ñÔÚ±¾µØÔËÐÐ-_-!
	{
		var xmlhttp=new XMLHttpRequest();//ÉÔÎ¢ÓÃÁËµãajax,Ö÷ÒªÎªÁËÓÃASP»ñÈ¡Í¼Æ¬´óÐ¡-_-!!!
		if(o.src.lastIndexOf("/")>-1)
		var src=o.src.substr(o.src.lastIndexOf("/")+1,o.src.length-1);
		var url="1.asp?src="+src+"&w="+oldw+"&h="+oldh;
		xmlhttp.open("get",url,true);
		xmlhttp.onreadystatechange=function()
		{
			if(this.readyState==4&&this.status==200)
			{
				$("infoPic").innerHTML=xmlhttp.responseText;
			}
		}
		xmlhttp.send(null);
	}
	o.style.marginTop=(op.offsetHeight-o.height)/2+'px';
}
function bgChange(o)//µã»÷ÓÒ²à¹ö¶¯À¸ÖÐµÄÍ¼Æ¬Ê±´¥·¢
{
	youCanScroll=true;
	disObj=o;
	if(oldObj)//Èç¹û´æÔÚÀúÊ·DIV,Ôò½«ÆäÑùÊ½»¹Ô­
	oldObj.style.cssText="width:110px;background:none;border:1px solid #ccc;";
	o.style.cssText="width:117px;height:110px;background:url(images/bu.gif);border:none;";	
	oldObj=o;//ÈÃµ±Ç°¶ÔÏóo±ä³ÉÀúÊ·DIV
	var n=-$("goShow").offsetTop/(110+20);
	//n¼ÆËãµ±Ç°×´Ì¬ÏÂ,goScroll³¬³öscrollµÄDIV¸öÊý
	if($("goShow").childNodes[n+1]==o&&o.previousSibling.nodeName.toLowerCase()!="script")//Èç¹ûÓÃ»§µã»÷µÄÊÇËùÏÔÊ¾µÄµÚÒ»¸öDIV
	$("goShow").style.top=$("goShow").offsetTop+(110+20)+'px'
	else if($("goShow").childNodes[n+3]==o&&o.nextSibling.nextSibling)//
	$("goShow").style.top=$("goShow").offsetTop-(110+20)+'px'
	else if($("goShow").childNodes[n+4]==o&&o.nextSibling)//Èç¹ûÓÃ»§µã»÷µÄÊÇËùÏÔÊ¾µÄ×îºóÒ»¸ödiv
	{
		$("goShow").style.top=(o.nextSibling.nextSibling)?($("goShow").offsetTop-2*(110+20)+'px'):($("goShow").offsetTop-(110+20)+'px');
	}
	if(!o.nextSibling)//Èç¹ûÒÑ¾­ÅÜµ½×îºóÒ»¸öÁË,¾Í½«down°´Å¥±äÎª»ÒÉ«
		$("down").style.background="url(images/bu.gif) no-repeat 0 -215px";
	else $("down").style.background="url(images/bu.gif) no-repeat 0 -189px";
	if(o.previousSibling.nodeName.toLowerCase()=="script")//Èç¹ûÒÑ¾­ÅÜ¶¥¶ËÁË,¾Í½«up°´Å¥±äÎª»ÒÉ«
	$("up").style.background="url(images/bu.gif) no-repeat 0 -137px";
	else 
	$("up").style.background="url(images/bu.gif) no-repeat 0 -111px";
	{//µ÷ÕûÏÔÊ¾
		var i=new Image();
		i.src=o.firstChild.src;
		display(i)
	}
	document.onkeydown=function(e)//¼üÅÌ¿ØÖÆÉÏÏÂ×ß¶¯
	{
		if(!youCanScroll)return;
		e=window.event||e;
		if(e.keyCode==38)//¼üÂë38±íÊ¾UP¼ü
		{
			if(o.previousSibling.nodeName.toLowerCase()!="script")
			bgChange(o.previousSibling)//»Øµ÷
		}
		else if(e.keyCode==40)//¼üÂë40±íÊ¾DOWN¼ü
		{
			if(o.nextSibling)
			bgChange(o.nextSibling)
		}
	}//¼üÅÌÊÂ¼þ½áÊø
}
$("down").onmousedown=$("up").onmousedown=function()//up down°´Å¥´¥·¢ÊÂ¼þ
{
	var timer=null;
	if(this==$("down"))//Èç¹ûÓÃ»§µã»÷µÄÊÇdown°´Å¥
	{
		$("up").style.background="url(images/bu.gif) no-repeat 0 -111px";//½«Ö®Ç°¿ÉÄÜÎª»ÒÉ«×´Ì¬µÄup»¹Ô­Îª¿ÉÓÃ×´Ì¬
	timer=setInterval(function(){//goShow¿éÕûÌåÍùÉÏÅÜ
							if($("goShow").offsetTop<=$("show").offsetHeight-$("goShow").offsetHeight+110+20)
							$("down").style.background="url(images/bu.gif) no-repeat 0 -215px";
							if($("goShow").offsetTop<=$("show").offsetHeight-$("goShow").offsetHeight)
							{
								clearInterval(timer);
								return;
							}
							$("goShow").style.top=$("goShow").offsetTop-130+'px';	   
							   },90);
	}
	else//Èç¹ûÓÃ»§µã»÷µÄÊÇup°´Å¥
	{
		$("down").style.background="url(images/bu.gif) no-repeat 0 -189px";//½«Ö®Ç°¿ÉÄÜÎª»ÒÉ«×´Ì¬µÄdown»¹Ô­Îª¿ÉÓÃ×´Ì¬
	timer=setInterval(function(){//goShow¿éÕûÌåÍùÏÂÅÜ
							if($("goShow").offsetTop>=0-(110+20))
							$("up").style.background="url(images/bu.gif) no-repeat 0 -137px";
							if($("goShow").offsetTop>=0)
							{
								clearInterval(timer);
								return;
							}
							$("goShow").style.top=$("goShow").offsetTop+130+'px';	   
							   },90);	
	}
	$("down").onmouseup=$("up").onmouseup=function()
	{
		if(timer)
		{
		clearInterval(timer);
		timer=null;
		}
	}//Êó±êµ¯ÆðÔòÇå³ýµ÷ÓÃ
}
window.addEventListener?$("goShow").addEventListener("DOMMouseScroll",wheel,false):$("goShow").onmousewheel=wheel;//»¬ÂÖÊÂ¼þ DOMMouseScrollÎªFFÐ´µÄ IEÔòÊÇÍ¨¹ýonmousewheelÊÂ¼þ´¥·¢
function wheel(e)
{
	if(!youCanScroll)return;//±ØÐëÔÚ¼¤»îÁËgoScrollÖÐµÄDIV²Å¿É´¥·¢ÊÂ¼þ
	e=window.event||e;
	var timer=null,data=document.all?-(e.wheelDelta/120):e.detail/3;//ffÊ¹ÓÃdetail·µ»Ø»¬ÂÖ×´Ì¬,3±íÊ¾ÏòÏÂ,-3±íÊ¾ÏòÉÏ,ieÊ¹ÓÃwheelDelta,-120±íÊ¾ÏòÏÂ,120±íÊ¾ÏòÉÏ,Õý¸ºÓëFFÏà·´
	if(data>0)//Èç¹û»¬ÂÖÏòÏÂ
	{
		if($("goShow").offsetTop<=$("show").offsetHeight-$("goShow").offsetHeight+110+20)
				$("down").style.background="url(images/bu.gif) no-repeat 0 -215px";
		if($("goShow").offsetTop<=$("show").offsetHeight-$("goShow").offsetHeight)
		return;
		$("up").style.background="url(images/bu.gif) no-repeat 0 -111px";
		$("goShow").style.top=$("goShow").offsetTop-(110+20)+'px';
	}
	else//Èç¹û»¬ÂÖÏòÉÏ
	{
		if($("goShow").offsetTop>=0-(110+20))
		$("up").style.background="url(images/bu.gif) no-repeat 0 -137px";
		if($("goShow").offsetTop>=0)
		return;
		$("down").style.background="url(images/bu.gif) no-repeat 0 -189px";
		$("goShow").style.top=$("goShow").offsetTop+(110+20)+'px';
	}
}
$("dis").onmousedown=function()//disÏÔÊ¾ÇøÒ²¿É´¥·¢»»Í¼ÊÂ¼þ
{
	if(disObj&&disObj==$("goShow").childNodes[$("goShow").childNodes.length-1])
	{
		alert("µ½¶¥ÁË!");
		return;
	}
	if(!disObj)
	bgChange($("goShow").childNodes[1]);
	else if(disObj&&disObj.nextSibling)
	bgChange(disObj.nextSibling);
}
function $(id){return document.getElementById(id);}