function chakan(id){
  var src1 = document.getElementById(id);
  var cc=src1.getAttribute("src")
  var src2 = document.getElementById("rimg2");
  var src3 = document.getElementById("rimg3");
  var src4 = document.getElementById("rimg4");
  var src5 = document.getElementById("rimg5");
  src2.setAttribute("src",cc);
  src3.style.display="block";
  src2.style.display="block";
  src4.style.display="block";
  src5.style.display="block";
}
var rot=0;
function changImg(){     //忘了这个函数干嘛的了
  var src2 = document.getElementById("rimg2");
  rot +=1;
  src2.className="rImg2-"+rot;
  if(rot==3){
  	rot=-1;
  }
}
function guanBi(){
	var gb2=document.getElementById('rimg4');
	gb2.onclick=function(){
		var src2 = document.getElementById("rimg2");
    var src3 = document.getElementById("rimg3");
		var src4 = document.getElementById("rimg4");
		var src5 = document.getElementById("rimg5");
		src3.style.display="none";
    src2.style.display="none";
    src4.style.display="none";
    src5.style.display="none";
	}
}
