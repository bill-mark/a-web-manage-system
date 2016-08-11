<%
response.Charset="gb2312"
src=request("src")
src="images/1.jpg"
src=server.MapPath(src)
w=request("w")
h=request("h")
set o=Server.CreateObject("Scripting.FileSystemObject")
set img=o.getfile(src)
str=cstr(img.size/1024)
str=left(str,instr(str,".")+1)
src=right(src,3)
response.Write(w&"¡Á"&h&":"&str&"k:"&src)
%>
