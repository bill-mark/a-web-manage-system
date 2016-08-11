// JavaScript Document
var oldObj=null,youCanScroll=false,disObj=null;//oldObj用来记录之前选择的div,youCanScroll判断是否可以触发滚轮事件,disObj表示显示区的图片对象
<!--以下所用的(110+20),110表示滚动栏里每个对象的高度,20表示它们之间的距离,$()函数获取对象-->
var init=function()//初始化
{
	$("box").style.width=window.screen.availWidth-30+'px';//针对不同分辨率改变box大小
	var img=new Image();
	img.src="images/1.jpg";
	display(img);//在dis中显示第一张图片
}
function display(o)//调整dis盒子中的图片,使其居中
{	
	var op=$("dis");
	if(op.hasChildNodes())//如果dis有子元素,则先删除
	op.removeChild(op.firstChild);
	op.appendChild(o);
	var oldw=o.width,oldh=o.height;
	if(o.width>op.offsetWidth)//如果图片宽度大于dis
	{
	var ow=o.width,oh=o.height;//记录调整之前图片的宽和高
	o.width=op.offsetWidth-120;
	o.height=o.width*oh/ow;
	//等比例缩小
	}
	if(o.height>op.offsetHeight)//同上
	{
	var ow=o.width,oh=o.height;
	o.height=op.offsetHeight-120;
	o.width=o.height*ow/oh;
	}
	$("imgPercent").innerHTML=Math.round(o.width/oldw*100);
	//显示图片百分比
	$("viewPic").href=o.src;//给"查看原图添加地址"
	$("imgFrom").href=o.src;//给图片来源添加地址
	var str=o.src.replace("http://","");//对地址稍加处理
	str=str.substr(0,17);
	var str1=str.substr(str.length-3,str.length-1);
	str=str.replace(str1,"...");
	$("imgFrom").innerHTML=str;
	if(location.href.substr(0,4)=="http")//判断是否在本地运行-_-!
	{
		var xmlhttp=new XMLHttpRequest();//稍微用了点ajax,主要为了用ASP获取图片大小-_-!!!
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
function bgChange(o)//点击右侧滚动栏中的图片时触发
{
	youCanScroll=true;
	disObj=o;
	if(oldObj)//如果存在历史DIV,则将其样式还原
	oldObj.style.cssText="width:110px;background:none;border:1px solid #ccc;";
	o.style.cssText="width:117px;height:110px;background:url(images/bu.gif);border:none;";	
	oldObj=o;//让当前对象o变成历史DIV
	var n=-$("goShow").offsetTop/(110+20);
	//n计算当前状态下,goScroll超出scroll的DIV个数
	if($("goShow").childNodes[n+1]==o&&o.previousSibling.nodeName.toLowerCase()!="script")//如果用户点击的是所显示的第一个DIV
	$("goShow").style.top=$("goShow").offsetTop+(110+20)+'px'
	else if($("goShow").childNodes[n+3]==o&&o.nextSibling.nextSibling)//
	$("goShow").style.top=$("goShow").offsetTop-(110+20)+'px'
	else if($("goShow").childNodes[n+4]==o&&o.nextSibling)//如果用户点击的是所显示的最后一个div
	{
		$("goShow").style.top=(o.nextSibling.nextSibling)?($("goShow").offsetTop-2*(110+20)+'px'):($("goShow").offsetTop-(110+20)+'px');
	}
	if(!o.nextSibling)//如果已经跑到最后一个了,就将down按钮变为灰色
		$("down").style.background="url(images/bu.gif) no-repeat 0 -215px";
	else $("down").style.background="url(images/bu.gif) no-repeat 0 -189px";
	if(o.previousSibling.nodeName.toLowerCase()=="script")//如果已经跑顶端了,就将up按钮变为灰色
	$("up").style.background="url(images/bu.gif) no-repeat 0 -137px";
	else 
	$("up").style.background="url(images/bu.gif) no-repeat 0 -111px";
	{//调整显示
		var i=new Image();
		i.src=o.firstChild.src;
		display(i)
	}
	document.onkeydown=function(e)//键盘控制上下走动
	{
		if(!youCanScroll)return;
		e=window.event||e;
		if(e.keyCode==38)//键码38表示UP键
		{
			if(o.previousSibling.nodeName.toLowerCase()!="script")
			bgChange(o.previousSibling)//回调
		}
		else if(e.keyCode==40)//键码40表示DOWN键
		{
			if(o.nextSibling)
			bgChange(o.nextSibling)
		}
	}//键盘事件结束
}
$("down").onmousedown=$("up").onmousedown=function()//up down按钮触发事件
{
	var timer=null;
	if(this==$("down"))//如果用户点击的是down按钮
	{
		$("up").style.background="url(images/bu.gif) no-repeat 0 -111px";//将之前可能为灰色状态的up还原为可用状态
	timer=setInterval(function(){//goShow块整体往上跑
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
	else//如果用户点击的是up按钮
	{
		$("down").style.background="url(images/bu.gif) no-repeat 0 -189px";//将之前可能为灰色状态的down还原为可用状态
	timer=setInterval(function(){//goShow块整体往下跑
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
	}//鼠标弹起则清除调用
}
window.addEventListener?$("goShow").addEventListener("DOMMouseScroll",wheel,false):$("goShow").onmousewheel=wheel;//滑轮事件 DOMMouseScroll为FF写的 IE则是通过onmousewheel事件触发
function wheel(e)
{
	if(!youCanScroll)return;//必须在激活了goScroll中的DIV才可触发事件
	e=window.event||e;
	var timer=null,data=document.all?-(e.wheelDelta/120):e.detail/3;//ff使用detail返回滑轮状态,3表示向下,-3表示向上,ie使用wheelDelta,-120表示向下,120表示向上,正负与FF相反
	if(data>0)//如果滑轮向下
	{
		if($("goShow").offsetTop<=$("show").offsetHeight-$("goShow").offsetHeight+110+20)
				$("down").style.background="url(images/bu.gif) no-repeat 0 -215px";
		if($("goShow").offsetTop<=$("show").offsetHeight-$("goShow").offsetHeight)
		return;
		$("up").style.background="url(images/bu.gif) no-repeat 0 -111px";
		$("goShow").style.top=$("goShow").offsetTop-(110+20)+'px';
	}
	else//如果滑轮向上
	{
		if($("goShow").offsetTop>=0-(110+20))
		$("up").style.background="url(images/bu.gif) no-repeat 0 -137px";
		if($("goShow").offsetTop>=0)
		return;
		$("down").style.background="url(images/bu.gif) no-repeat 0 -189px";
		$("goShow").style.top=$("goShow").offsetTop+(110+20)+'px';
	}
}
$("dis").onmousedown=function()//dis显示区也可触发换图事件
{
	if(disObj&&disObj==$("goShow").childNodes[$("goShow").childNodes.length-1])
	{
		alert("到顶了!");
		return;
	}
	if(!disObj)
	bgChange($("goShow").childNodes[1]);
	else if(disObj&&disObj.nextSibling)
	bgChange(disObj.nextSibling);
}
function $(id){return document.getElementById(id);}
