// JavaScript Document
var oldObj=null,youCanScroll=false,disObj=null;//oldObj������¼֮ǰѡ���div,youCanScroll�ж��Ƿ���Դ��������¼�,disObj��ʾ��ʾ����ͼƬ����
<!--�������õ�(110+20),110��ʾ��������ÿ������ĸ߶�,20��ʾ����֮��ľ���,$()������ȡ����-->
var init=function()//��ʼ��
{
	$("box").style.width=window.screen.availWidth-30+'px';//��Բ�ͬ�ֱ��ʸı�box��С
	var img=new Image();
	img.src="images/1.jpg";
	display(img);//��dis����ʾ��һ��ͼƬ
}
function display(o)//����dis�����е�ͼƬ,ʹ�����
{	
	var op=$("dis");
	if(op.hasChildNodes())//���dis����Ԫ��,����ɾ��
	op.removeChild(op.firstChild);
	op.appendChild(o);
	var oldw=o.width,oldh=o.height;
	if(o.width>op.offsetWidth)//���ͼƬ��ȴ���dis
	{
	var ow=o.width,oh=o.height;//��¼����֮ǰͼƬ�Ŀ�͸�
	o.width=op.offsetWidth-120;
	o.height=o.width*oh/ow;
	//�ȱ�����С
	}
	if(o.height>op.offsetHeight)//ͬ��
	{
	var ow=o.width,oh=o.height;
	o.height=op.offsetHeight-120;
	o.width=o.height*ow/oh;
	}
	$("imgPercent").innerHTML=Math.round(o.width/oldw*100);
	//��ʾͼƬ�ٷֱ�
	$("viewPic").href=o.src;//��"�鿴ԭͼ��ӵ�ַ"
	$("imgFrom").href=o.src;//��ͼƬ��Դ��ӵ�ַ
	var str=o.src.replace("http://","");//�Ե�ַ�ԼӴ���
	str=str.substr(0,17);
	var str1=str.substr(str.length-3,str.length-1);
	str=str.replace(str1,"...");
	$("imgFrom").innerHTML=str;
	if(location.href.substr(0,4)=="http")//�ж��Ƿ��ڱ�������-_-!
	{
		var xmlhttp=new XMLHttpRequest();//��΢���˵�ajax,��ҪΪ����ASP��ȡͼƬ��С-_-!!!
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
function bgChange(o)//����Ҳ�������е�ͼƬʱ����
{
	youCanScroll=true;
	disObj=o;
	if(oldObj)//���������ʷDIV,������ʽ��ԭ
	oldObj.style.cssText="width:110px;background:none;border:1px solid #ccc;";
	o.style.cssText="width:117px;height:110px;background:url(images/bu.gif);border:none;";	
	oldObj=o;//�õ�ǰ����o�����ʷDIV
	var n=-$("goShow").offsetTop/(110+20);
	//n���㵱ǰ״̬��,goScroll����scroll��DIV����
	if($("goShow").childNodes[n+1]==o&&o.previousSibling.nodeName.toLowerCase()!="script")//����û������������ʾ�ĵ�һ��DIV
	$("goShow").style.top=$("goShow").offsetTop+(110+20)+'px'
	else if($("goShow").childNodes[n+3]==o&&o.nextSibling.nextSibling)//
	$("goShow").style.top=$("goShow").offsetTop-(110+20)+'px'
	else if($("goShow").childNodes[n+4]==o&&o.nextSibling)//����û������������ʾ�����һ��div
	{
		$("goShow").style.top=(o.nextSibling.nextSibling)?($("goShow").offsetTop-2*(110+20)+'px'):($("goShow").offsetTop-(110+20)+'px');
	}
	if(!o.nextSibling)//����Ѿ��ܵ����һ����,�ͽ�down��ť��Ϊ��ɫ
		$("down").style.background="url(images/bu.gif) no-repeat 0 -215px";
	else $("down").style.background="url(images/bu.gif) no-repeat 0 -189px";
	if(o.previousSibling.nodeName.toLowerCase()=="script")//����Ѿ��ܶ�����,�ͽ�up��ť��Ϊ��ɫ
	$("up").style.background="url(images/bu.gif) no-repeat 0 -137px";
	else 
	$("up").style.background="url(images/bu.gif) no-repeat 0 -111px";
	{//������ʾ
		var i=new Image();
		i.src=o.firstChild.src;
		display(i)
	}
	document.onkeydown=function(e)//���̿��������߶�
	{
		if(!youCanScroll)return;
		e=window.event||e;
		if(e.keyCode==38)//����38��ʾUP��
		{
			if(o.previousSibling.nodeName.toLowerCase()!="script")
			bgChange(o.previousSibling)//�ص�
		}
		else if(e.keyCode==40)//����40��ʾDOWN��
		{
			if(o.nextSibling)
			bgChange(o.nextSibling)
		}
	}//�����¼�����
}
$("down").onmousedown=$("up").onmousedown=function()//up down��ť�����¼�
{
	var timer=null;
	if(this==$("down"))//����û��������down��ť
	{
		$("up").style.background="url(images/bu.gif) no-repeat 0 -111px";//��֮ǰ����Ϊ��ɫ״̬��up��ԭΪ����״̬
	timer=setInterval(function(){//goShow������������
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
	else//����û��������up��ť
	{
		$("down").style.background="url(images/bu.gif) no-repeat 0 -189px";//��֮ǰ����Ϊ��ɫ״̬��down��ԭΪ����״̬
	timer=setInterval(function(){//goShow������������
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
	}//��굯�����������
}
window.addEventListener?$("goShow").addEventListener("DOMMouseScroll",wheel,false):$("goShow").onmousewheel=wheel;//�����¼� DOMMouseScrollΪFFд�� IE����ͨ��onmousewheel�¼�����
function wheel(e)
{
	if(!youCanScroll)return;//�����ڼ�����goScroll�е�DIV�ſɴ����¼�
	e=window.event||e;
	var timer=null,data=document.all?-(e.wheelDelta/120):e.detail/3;//ffʹ��detail���ػ���״̬,3��ʾ����,-3��ʾ����,ieʹ��wheelDelta,-120��ʾ����,120��ʾ����,������FF�෴
	if(data>0)//�����������
	{
		if($("goShow").offsetTop<=$("show").offsetHeight-$("goShow").offsetHeight+110+20)
				$("down").style.background="url(images/bu.gif) no-repeat 0 -215px";
		if($("goShow").offsetTop<=$("show").offsetHeight-$("goShow").offsetHeight)
		return;
		$("up").style.background="url(images/bu.gif) no-repeat 0 -111px";
		$("goShow").style.top=$("goShow").offsetTop-(110+20)+'px';
	}
	else//�����������
	{
		if($("goShow").offsetTop>=0-(110+20))
		$("up").style.background="url(images/bu.gif) no-repeat 0 -137px";
		if($("goShow").offsetTop>=0)
		return;
		$("down").style.background="url(images/bu.gif) no-repeat 0 -189px";
		$("goShow").style.top=$("goShow").offsetTop+(110+20)+'px';
	}
}
$("dis").onmousedown=function()//dis��ʾ��Ҳ�ɴ�����ͼ�¼�
{
	if(disObj&&disObj==$("goShow").childNodes[$("goShow").childNodes.length-1])
	{
		alert("������!");
		return;
	}
	if(!disObj)
	bgChange($("goShow").childNodes[1]);
	else if(disObj&&disObj.nextSibling)
	bgChange(disObj.nextSibling);
}
function $(id){return document.getElementById(id);}
